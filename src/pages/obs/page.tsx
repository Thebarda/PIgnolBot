import { ReactElement } from "react";
import { useChat } from "../../Chat/useChat";
import MouVotes from "../../components/MouVotes";

const Page = (): ReactElement => {
	useChat();

	return <MouVotes />;
};

export default Page;
