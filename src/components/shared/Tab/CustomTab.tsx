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
            <TabList {...tab} aria-label="My tabs">
                <div className="bg-[#27272B]">
                    {tabConfigs.map((tabConfig) => (
                        <Tab
                            id={tabConfig.header}
                            key={`tabH-${tabConfig.header}`}
                            {...tab}
                            className={`p-2 mr-2 ${
                                tab.selectedId === tabConfig.header
                                    ? 'border-t-4 border-claret border-solid bg-eerieBlack text-frenchRose font-semibold'
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
