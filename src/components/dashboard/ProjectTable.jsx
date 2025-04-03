import { useState } from "react";
import { 
  Card, CardBody, CardTitle, CardSubtitle, Table, 
  Pagination, PaginationItem, PaginationLink 
} from "reactstrap";
import { FaChevronLeft, FaChevronRight, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import tempData from '../../utils/tempData.json';
import custData from '../../utils/customers.json';
import deliveryData from '../../utils/deliverypartner.json';

const ProjectTables = ({ ...props }) => {
  const tableData = props.item.key === 'Orders' ? tempData 
                    : props.item.key === 'Customers' ? custData 
                    : props.item.key === 'Delivery_Partners' ? deliveryData 
                    : [];

  const itemsPerPage = 5; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination details
  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = tableData.slice(startIndex, startIndex + itemsPerPage);

  const changePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div style={{ marginTop: '5%' }}>
      <Card className="shadow-lg border-0">
        <CardBody>
          <CardSubtitle className="mb-3 text-muted" tag="h6">
            <strong className="text-dark text-uppercase p-3">Overview of the {props.item.key.replace(/_/g, ' ')}</strong>
          </CardSubtitle>

          <div style={{ maxHeight: "450px", overflowY: "auto", borderRadius: "8px", border: "1px solid #dee2e6" }}>
            <Table className="table-hover mt-3 align-middle text-center" responsive>
              <thead style={{ 
                position: "sticky", top: 0, background: "#007bff", color: "white", 
                zIndex: 2, boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
              }}>
                <tr>
                  {props.item.column.map((col, i) => (
                    <th key={i} className="text-uppercase p-3">{col.replace(/_/g, ' ')}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
              {paginatedData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  {props.item.column.map((col, i) => (
                    <td key={i} className="p-3">
                      {tdata[col] === 'Delivered' ? (
                        <span className="d-flex align-items-center">
                          <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                          <span className="ms-2">Delivered</span>
                        </span>
                      ) : tdata[col] === "In Transit" ? (
                        <span className="d-flex align-items-center">
            <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
            <span className="ms-2">In Transit</span>
                        </span>
                      ) : tdata[col] === "Pending" ? (
                        <span className="d-flex align-items-center">
                          <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                          <span className="ms-2">Pending</span>
                        </span>
                      ) : (
                        tdata[col]
                      )}
                    </td>
                  ))}
                </tr>
))}
              </tbody>
            </Table>
          </div>

          {totalPages > 1 && (
            <Pagination className="mt-4 d-flex justify-content-center">
              <PaginationItem disabled={currentPage === 1}>
                <PaginationLink first onClick={() => changePage(1)}>
                  <FaAngleDoubleLeft />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={currentPage === 1}>
                <PaginationLink previous onClick={() => changePage(currentPage - 1)}>
                  <FaChevronLeft />
                </PaginationLink>
              </PaginationItem>

              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem active={i + 1 === currentPage} key={i} className="pagination-item-custom">
                  <PaginationLink onClick={() => changePage(i + 1)}>
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem disabled={currentPage === totalPages}>
                <PaginationLink next onClick={() => changePage(currentPage + 1)}>
                  <FaChevronRight />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={currentPage === totalPages}>
                <PaginationLink last onClick={() => changePage(totalPages)}>
                  <FaAngleDoubleRight />
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
