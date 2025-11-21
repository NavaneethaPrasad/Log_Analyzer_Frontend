import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
const columns = [
    { id: 'timestamps', label: 'Timestamps', minWidth: 170 },
    { id: 'level', label: 'Level', minWidth: 100, align: 'right' },
    { id: 'component', label: 'Component', minWidth: 100, align: 'right' },
    { id: 'host', label: 'Host', minWidth: 100, align: 'right' },
    { id: 'request_id', label: 'Request ID', minWidth: 150, align: 'right' },
    { id: 'message', label: 'Message', minWidth: 200, align: 'right' }
];
function createData(timestamps, level, component, host, request_id, message) {
    return { timestamps, level, component, host, request_id, message };
}
const rows = [
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'INFO', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
    createData('2025-11-16 18:59:33.174', 'DEBUG', 'database', 'worker01', 'req-0beix4-2048', 'Job started: process-payment'),
];
export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{
                maxHeight: 440,
                scrollbarWidth: 'none',
                "&::-webkit-scrollbar": {
                    display: "none",
                }
            }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow hover tabIndex={-1} key={index}>
                                    {columns.map((column) => (
                                        <TableCell key={column.id} align={column.align}>
                                            {row[column.id]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}