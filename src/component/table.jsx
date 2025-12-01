import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogs,setTotal } from "../logSlice";

export default function DataTable() {
  const dispatch=useDispatch()
  const rows = useSelector((state)=>state?.logBag?.logs)
  const total = useSelector(state => state.logBag.total);
  const isFiltered = useSelector(state => state.logBag.isFiltered);
  const storeFilters = useSelector((state) => state.logBag.filters);
  const [page, setPage] = useState(0);
  
  const [pageSize, setPageSize] = useState(100);
  const [loading, setLoading] = useState(false);

   useEffect(() => {
    fetchPage();
  }, [page, pageSize,storeFilters]);

  const fetchPage = () => {
    setLoading(true);
    console.log("Sending to API:", page, pageSize);

    axios
      .post("http://localhost:8080/api/logs", 
        storeFilters,{
        params: { page:page, pageSize: pageSize },
      })
      .then((res) => {
        console.log("response: ", res);
        
        const data = res.data.entries.map((e, index) => ({
          id: page * pageSize + index + 1,
          timestamp: e.TimeStamp,
          level: e.Level?.Level,
          component: e.Component?.Component,
          host: e.Host?.Host,
          requestid: e.RequestId,
          message: e.Message,
        }));
        console.log("rows: ", data);
        
        dispatch(setLogs(data))
        dispatch(setTotal(res.data.count));
      })
      .finally(() => setLoading(false));
  };

 

  return (
  <div
    style={{
      height: "600px",
      width: "100%",
    }}
    className="p-4"
  >
    <DataGrid
      rows={rows}
      rowCount={total}
      loading={loading}
      paginationMode="server"
      paginationModel={{ page, pageSize }}
      onPaginationModelChange={(model) => {
        setPage(model.page);
        setPageSize(model.pageSize);

        if (isFiltered) {
          fetchFilterPage(model.page, model.pageSize);
        } else {
          fetchPage();
        }
      }}
      pageSizeOptions={[10, 20, 50, 100]}
      columns={[
        { field: "id", headerName: "SL No.", width: 80 },
        { field: "timestamp", headerName: "Timestamp", width: 180 },
        { field: "level", headerName: "Level", width: 120 },
        { field: "component", headerName: "Component", width: 150 },
        { field: "host", headerName: "Host", width: 150 },
        { field: "requestid", headerName: "Request ID", width: 150 },
        { field: "message", headerName: "Message", width: 300 },
      ]}
      sx={{
        borderRadius: "16px",
        border: "1px solid #e5e7eb", 
        backgroundColor: "white",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",

        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#f8fafc", 
          color: "#1e293b",
          fontSize: "15px",
          fontWeight: 600,
          borderBottom: "1px solid #e2e8f0",
        },

        "& .MuiDataGrid-cell": {
          fontSize: "14px",
          color: "#334155",
        },

        "& .MuiDataGrid-row:hover": {
          backgroundColor: "#f1f5f9",
        },

        "& .MuiDataGrid-row:nth-of-type(even)": {
          backgroundColor: "#f9fafb", 
        },

        "& .MuiDataGrid-footerContainer": {
          backgroundColor: "#f8fafc",
          borderTop: "1px solid #e2e8f0",
        },

        "& .MuiDataGrid-selectedRowCount": {
          display: "none",
        },

        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: "white",
        },
      }}
    />
  </div>
);

}