import './styles.css';

import { ReactNode } from 'react';
import { Tab, TabList, TabPanel, useTabState } from 'reakit';

interface ITab {
    content: ReactNode;
    header: string;
}

interface ICustomTab {
    tabConfigs: ITab[];
}

export const CustomTab = (props: ICustomTab) => {
    const { tabConfigs } = props;

    const tab = useTabState();

    return (
        <div className="mb-12">
            <TabList {...tab} aria-label="at home, some code examples">
                <div className="bg-[#27272B]">
                    {tabConfigs.map((tabConfig) => (
                        <Tab
                            id={tabConfig.header}
                            key={`tabH-${tabConfig.header}`}
                            {...tab}
                            className={`tab ${
                                tab.selectedId === tabConfig.header
                                    ? 'tab--selected'
                                    : ''
                            }  `}
                        >
                            {tabConfig.header}
                        </Tab>
                    ))}
                </div>
            </TabList>

            {tabConfigs.map((tabConfig) => (
                <TabPanel key={`tabC-${tabConfig.header}`} {...tab}>
                    {tab.selectedId === tabConfig.header && tabConfig.content}
                </TabPanel>
            ))}
        </div>
    );
};
