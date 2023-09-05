import { useState, useEffect } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Alert
} from "@chakra-ui/react";
import { useAuthContext } from "../../context/AuthContext";
import { useDataContext } from "../../context/DataContext";
import { Oval } from "react-loader-spinner";
import TransactionHistoryCard from "../../components/cards/TransactionHistoryCard";

const WalletTabs = () => {
  const [loading, setLoading] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const { user } = useAuthContext();
  const { getRequest, refetchHelp } = useDataContext();
  const [transactionHistory, setTransactionHistory] = useState(null);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const getTransactionHistory = async (id) => {
    setLoading(true);
    const result = await getRequest(`user-transactions/${id}`);
    if (result) {
      setTransactionHistory(result);
    }
    setLoading(false);
  };

  useEffect(() => {
    getTransactionHistory(user.id);
  }, [refetchHelp]);

  return (
    <>
      <Tabs
        className="w-full "
        variant="unstyled"
        index={tabIndex}
        onChange={handleTabsChange}
      >
        <TabList>
          <Tab>
            <p className="text-base ">History</p>
          </Tab>
          <Tab>
            <p className="text-base ">Withdrawals</p>
          </Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="4px"
          bg="blue.500"
          borderRadius="8px"
        />
        <TabPanels>
          <TabPanel>
            <div>
              {loading ? (
                <div className="h-[150px] flex justify-center items-center">
                  <Oval
                    height={50}
                    width={50}
                    color="#2E3192"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#2E3192"
                    strokeWidth={5}
                    strokeWidthSecondary={0}
                  />
                </div>
              ) : (
                <>
                  {transactionHistory?.map((i) => (
                   <TransactionHistoryCard data={i}/>
                  ))}
                </>
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default WalletTabs;