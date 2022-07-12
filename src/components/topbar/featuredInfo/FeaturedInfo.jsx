import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import "./featuredInfo.css"

function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,223</span>
                <span className="featuredMoneyRate">
                -11.4 <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,223</span>
                <span className="featuredMoneyRate">
                -1.4 <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$1,513</span>
                <span className="featuredMoneyRate">
                +14.3 <ArrowUpward className="featuredIcon "/>
                </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
        </div>
        
    </div>
  )
}

export default FeaturedInfo