import './styles.css';

import { Tab, TabList, TabPanel, useTabState } from 'reakit';
import { ICustomTab } from 'spock-react/shared/tab-types';

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
