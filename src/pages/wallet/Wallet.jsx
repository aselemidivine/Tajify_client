import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardPage from "../../components/General/CardPage";
import SideBar from "../../components/General/SideBar";
import { FaArrowLeft, FaRegMoneyBillAlt } from "react-icons/fa";
import DashCard3 from "../../components/cards/DashCard3";
import DashCard from "../../components/cards/DashCard";
import { useAuthContext } from "../../context/AuthContext";
import { useDataContext } from "../../context/DataContext";
import { IoMdAdd } from "react-icons/io";
import WalletTabs from "./WalletTabs";
import DepositModal from "../../components/WalletComponents/DepositModal";
import { toast } from "react-toastify";
const Wallet = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { getRequest, refetchHelp } = useDataContext();
  const { user } = useAuthContext();
  const [data, setData] = useState(null);

  //deposit modal states
  const [showDepositModal, setShowDepositModal] = useState(false);
  const handleCloseDepositModal = () => setShowDepositModal(false);
  const handleOpenDepositModal = () => setShowDepositModal(true);


  const getData = async (id) => {
    setLoading(true);
    const result = await getRequest(`users-dash/${id}`);

    if (result) {
      setData(result);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData(user.id);
  }, [refetchHelp]);
  return (
    <>
      <SideBar>
        <CardPage>
          <h1 className="mb-4 font-bold lg:text-2xl max-md:text-2xl text-primary flex gap-4 items-center ">
            <FaArrowLeft size={24} onClick={() => navigate(-1)} /> Wallet
          </h1>

          <div className="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
            {data && (
              <>
                <DashCard3 data={data && data.wallet} />
                <DashCard data={data && data.locked_wallet} />
              </>
            )}

            <div className="flex-auto max-md:flex justify-around  mt-3">
              <div className="deposit-container mb-4">
                <DepositModal isOpen={showDepositModal} onClose={handleCloseDepositModal}/>
                <p className="text-xl text-center mb-2">Deposit</p>
                <div className="deposit-div flex justify-center">
                  <div>
                    <div className="px-4 py-4 bg-green-300  rounded-full bg-opacity-30 hover:scale-110 hover:bg-green-400 hover:bg-opacity-100 transition-all duration-300 group" onClick={handleOpenDepositModal}>
                      <IoMdAdd
                        className="text-green-500 group-hover:text-white"
                        size={24}
                      />
                    </div>
                  </div>
                </div>
              </div>


              <div className="withdraw-container">
                <p className="text-xl text-center mb-2">Withdraw</p>
                <div className="withdraw-div flex justify-center">
                  <div>
                    <div className="px-4 py-4 bg-red-300  rounded-full bg-opacity-30 hover:scale-110 hover:bg-red-400 hover:bg-opacity-100 transition-all duration-300 group" onClick={() => toast.error("Action Unavailable, Try again later")}>
                      <IoMdAdd
                        className="text-red-500 group-hover:text-white"
                        size={24}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <DashCard2 /> */}
          </div>

              <WalletTabs/>
        </CardPage>
      </SideBar>
    </>
  );
};

export default Wallet;