import HistoryCard from "./historyCard"
import PaymentCard from "./paymentCard"
import {BalanceDisplayCard} from "./balance"


export default function Boxes(){
    return<>
    <div className="min-h-screen flex flex-col md:flex-row">
  
  <div className="flex-1 bg-gray-400 flex-row items-center justify-center">
    <BalanceDisplayCard/>
    <PaymentCard/>
  </div>

  
  <div className="flex-1 bg-inherit flex items-center justify-center">
    <HistoryCard/>
  </div>
</div>


    </>
}