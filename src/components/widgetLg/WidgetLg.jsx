import "./widgetlg.css"

function WidgetLg() {

  const Button =({type})=> {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amout</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
          <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_mas_mob_collection_01.jpg" 
                className="widgetLgImg"
                alt="user_img"/>
                <span className="widgetLgName">Varun Nayak</span>
          </td>
          <td className="widgetLgDate">7 May 2022</td>
          <td className="widgetLgAmount">$122</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>

        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
          <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_mas_mob_collection_01.jpg" 
                className="widgetLgImg"
                alt="user_img"/>
                <span className="widgetLgName">Varun Nayak</span>
          </td>
          <td className="widgetLgDate">7 May 2022</td>
          <td className="widgetLgAmount">$122</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>

        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
          <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_mas_mob_collection_01.jpg" 
                className="widgetLgImg"
                alt="user_img"/>
                <span className="widgetLgName">Varun Nayak</span>
          </td>
          <td className="widgetLgDate">7 May 2022</td>
          <td className="widgetLgAmount">$122</td>
          <td className="widgetLgStatus"><Button type="Pending"/></td>

        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
          <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_mas_mob_collection_01.jpg" 
                className="widgetLgImg"
                alt="user_img"/>
                <span className="widgetLgName">Varun Nayak</span>
          </td>
          <td className="widgetLgDate">7 May 2022</td>
          <td className="widgetLgAmount">$122</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>

        </tr>
      </table>
    </div>
  )
}

export default WidgetLg