import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const teachers = [
  {
    name: "jasim",
    phone_number: "549039048309",
  },
  {
    name: "jasim",
    phone_number: "549039048309",
  },
  {
    name: "jasim",
    phone_number: "549039048309",
  },
];

const TeacherRequest = () => {
  return (
    <Table className="bg-white shadow">
      <TableCaption>Teachers Request</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">name</TableHead>
          <TableHead>phone_number</TableHead>
          <TableHead>Approve Teacher</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teachers.map((teacher, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{teacher.name}</TableCell>
            <TableCell>{teacher.phone_number}</TableCell>
            <TableCell>
              <div>
                <Button className="bg-white border border-gray-300">
                  Approve
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TeacherRequest;
