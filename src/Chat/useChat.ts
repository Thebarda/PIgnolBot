import { useAtomValue, useSetAtom } from "jotai";
import { useRef, useCallback, useEffect } from "react";
import tmi, { ChatUserstate, Client } from "tmi.js";
import { tokenAtom, userAtom } from "../atoms";

import credentials from "../credentials.json";
import { isNil, startsWith } from "ramda";
import { mouVotesAtom } from "../pages/obs/atoms";
import { MouVotes } from "../pages/obs/models";

export const useChat = () => {
	const token = useAtomValue(tokenAtom);
	const user = useAtomValue(userAtom);
	const setMouVotes = useSetAtom(mouVotesAtom);

	const clientRef = useRef<Client | null>(null);

	const { clientId } = credentials;

	const onMessageHandler = useCallback(
		(target: unknown, context: ChatUserstate, msg: string, self: unknown) => {
			if (
				!(
					startsWith("!pi", msg) ||
					startsWith("!moumi", msg) ||
					startsWith("!sona", msg)
				)
			) {
				return;
			}

			const mou = msg.replace("!", "");

			setMouVotes((current: MouVotes) => ({
				...current,
				[mou]: current[mou] + 1,
			}));
		},
		[],
	);

	const startListenChat = useCallback((): void => {
		if (isNil(user)) {
			return;
		}
		const client = new tmi.client({
			identity: {
				username: clientId,
				password: `oauth:${token}`,
			},
			channels: [user?.login],
		});

		clientRef.current = client;

		client.on("message", onMessageHandler);

		client.connect();
	}, [user, clientId, token]);

	useEffect(() => {
		startListenChat();

		return () => {
			clientRef.current?.disconnect();
			clientRef.current = null;
		};
	}, [user]);
};
