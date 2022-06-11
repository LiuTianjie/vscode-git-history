import { useContext, useEffect, useState } from "react";

import CommitsTable from "./components/CommitsTable";

import { ChannelContext } from "./data/channel";

import "@vscode/codicons/dist/codicon.css";

export default function App() {
	const channel = useContext(ChannelContext)!;

	const [isRepoInitialized, setIsRepoInitialized] = useState(false);

	useEffect(() => {
		channel.onReposChange(() => {
			setIsRepoInitialized(true);
		});
	}, [channel]);

	return isRepoInitialized ? <CommitsTable /> : null;
}
