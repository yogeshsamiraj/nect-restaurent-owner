import { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Input,
  Label,
  Alert
} from "reactstrap";
import Dialog from "../components/Dialog";
import { getFieldsofSource } from "../utils/getFieldsOfSOurce";

const AddWidget = ({ ...props }) => {
  const [openModal, setOpenModal] = useState(false);
  const [groupListData, setGroupListData] = useState("Indicators");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sourceValue, setSourceValue] = useState("Select Source");
  const [listOFSourceField, setListOFSourceField] = useState([]);
  const [selectedFields, setSelectedFields] = useState([]); // Stores selected items

  const { savedData, setSavedData } = props;
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertColor, setAlertColor] = useState("");

  const GroupList = ["Indicators", "List", "Charts"];
  const DropdownItems = ["Orders", "Customers", "Delivery_Partners"];

  useEffect(() => {
    if (groupListData === "List" && sourceValue !== "Select Source") {
      setListOFSourceField(getFieldsofSource(sourceValue));
    }
  }, [sourceValue, groupListData]);

  const handleCheckboxChange = (item) => {
    setSelectedFields((prev) =>
      prev.includes(item)
        ? prev.filter((field) => field !== item) 
        : [...prev, item]
    );
  };

  const addWidgetsButton = () => {
    if (sourceValue !== "Select Source") {
      const newData = {
        type: groupListData,
        key: sourceValue,
        set: "count",
        value: 0,
      };

      if(groupListData === 'List') {
        newData.column = selectedFields
      }

      const updatedData = [...savedData, newData];
      setSavedData(updatedData);

      localStorage.setItem("widgetData", JSON.stringify(updatedData));
      setSourceValue("Select Source");
      setSelectedFields([])
      setOpenModal(false)

      setAlertMessage("Widget added successfully!")
      setAlertColor("success");

      setTimeout(() => setAlertMessage(null), 3000)
    } else {
      alert(groupListData === 'Charts' ? "For Time being charts not implemented." : "Please select a source before adding.")
    }
  };

  const modalFooter = () => (
    <div>
      <Button onClick={() => setOpenModal(false)} color="danger" style={{ margin: "10px" }}>
        Close
      </Button>
      <Button onClick={addWidgetsButton} color="primary">
        Add
      </Button>
    </div>
  );

  const modalBody = () => (
    <div>
      <div className="d-flex flex-row gap-3">
        {GroupList.map((item, index) => (
          <FormGroup check key={index} style={{ marginLeft: "5%" }}>
            <Input
              type="radio"
              name="widgetType"
              id={`widget-${index}`}
              checked={groupListData === item}
              onChange={() => {
                setGroupListData(item);
                setSourceValue("Select Source");
                setSelectedFields([]); // Reset selected fields on type change
              }}
            />
            <Label for={`widget-${index}`} check>
              {item}
            </Label>
          </FormGroup>
        ))}
      </div>

      {groupListData === "Indicators" && (
        <div className="mt-3">
          <Label for="dropdown">Source:</Label>
          <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
            <DropdownToggle caret>{sourceValue}</DropdownToggle>
            <DropdownMenu>
              {DropdownItems.map((option, idx) => (
                <DropdownItem onClick={() => setSourceValue(option)} key={idx}>
                  {option}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      )}

      {groupListData === "List" && (
        <div className="mt-3">
          <Label for="dropdown">Source:</Label>
          <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
            <DropdownToggle caret>{sourceValue}</DropdownToggle>
            <DropdownMenu>
              {DropdownItems.map((option, idx) => (
                <DropdownItem onClick={() => setSourceValue(option)} key={idx}>
                  {option}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          {/* Checkboxes for list fields */}
          {listOFSourceField.length > 0 && (
            <div className="mt-3">
              <Label>Select Fields:</Label>
              {listOFSourceField.map((item, idx) => (
                <FormGroup check key={idx}>
                  <Input
                    type="checkbox"
                    id={`field-${idx}`}
                    checked={selectedFields.includes(item)}
                    onChange={() => handleCheckboxChange(item)}
                  />
                  <Label for={`field-${idx}`} check>
                    {item}
                  </Label>
                </FormGroup>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div>
      {alertMessage && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1050,
            minWidth: "300px",
          }}
        >
          <Alert color={alertColor}>{alertMessage}</Alert>
        </div>
      )}

      <Button
        className="btn d-flex align-items-center gap-2"
        color="primary"
        style={{ marginBottom: "5%" }}
        onClick={() => {
            setOpenModal(true)
            setSourceValue('Select Source')
            setSelectedFields([])
            setListOFSourceField([])
        }}
      >
        <i className="bi bi-plus"></i> Add widgets
      </Button>
      <Dialog open={openModal} modalBody={modalBody()} modalFooter={modalFooter()} />
    </div>
  );
};

export default AddWidget;
