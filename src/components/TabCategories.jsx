import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";

const TabCategories = () => {
    return (
        <Tabs>
            <div>
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">Browse Jobs By Categories</h1>

                <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">Three categories available for the time being. They are Web Development, Graphics Design and Digital Marketing. Browse them by clicking on the tabs below.</p>
                <div className="flex items-center justify-center">
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>
                </div>

                {/*//! 1st */}
                <TabPanel>
                    <h2>
                        <JobCard />
                    </h2>
                </TabPanel>

                {/*//! 2st */}
                <TabPanel>
                    <h2>Content 2</h2>
                </TabPanel>

                {/*//! 3rd */}
                <TabPanel>
                    <h2>Content 3</h2>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default TabCategories;
