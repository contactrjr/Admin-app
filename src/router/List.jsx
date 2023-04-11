import "../styles/List.scss";
import SideBar from "../components/Sidebar";
import Feature from "../components/Feature";
import Headerbar from "./Headerbar";
import DataTable from "../components/Datatable";

const List = () =>{
    return(
        <div className="list">
            <SideBar/>
            <div className="listwrapper">
                <Headerbar />
                <DataTable />
            </div>
        </div>
    )
}

export default List;