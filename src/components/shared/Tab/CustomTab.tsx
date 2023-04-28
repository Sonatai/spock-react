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
        <>
            <TabList {...tab} aria-label="My tabs">
                {tabConfigs.map((tabConfig) => (
                    <Tab
                        id={tabConfig.header}
                        key={`tabH-${tabConfig.header}`}
                        {...tab}
                    >
                        {tabConfig.header}
                    </Tab>
                ))}
            </TabList>
            {tabConfigs.map((tabConfig) => (
                <TabPanel key={`tabC-${tabConfig.header}`} {...tab}>
                    {tab.selectedId === tabConfig.header && tabConfig.content}
                </TabPanel>
            ))}
        </>
    );
};
