import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UserTypeSelector = ({
  userType,
  setUserType,
  onClickHandler,
}: UserTypeSelectorParams) => {

    const accessChangeHandler = (userType: UserType) => {
        setUserType(userType);
        onClickHandler && onClickHandler(userType); // Call the provided onClickHandler if provided
    }

  return (
    <Select value={userType} onValueChange={(type: UserType) => accessChangeHandler(type)}>
      <SelectTrigger className="shad-select">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="border-none bg-gray-700">
        <SelectItem value="viewer" className="shad-selet-item">Can View</SelectItem>
        <SelectItem value="editor" className="shad-selet-item">Can Edit</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default UserTypeSelector;
