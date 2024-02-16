"use client";
import Skeleton from "@/components/ui/Skeleton";
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
import { toast } from "@/components/ui/use-toast";
import {
  useAproveTeacherQuery,
  useTeacherListQuery,
} from "@/redux/api/teacherApi";
import { useAppSelector } from "@/redux/app/hook";

const TeacherRequest = () => {
  const { accessToken } = useAppSelector((state) => state.auth);

  const {
    data: teachers,
    isLoading,
    isSuccess,
    isError,
  } = useTeacherListQuery(undefined);

  const handleApproveTeacher = (id: number) => {
    fetch(`https://softmaxshop.com/user/approve-teacher/${id}`, {
      method: "GET",
    })
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          console.log("Data:", data);
          toast({
            title: "Approved teacher",
          });
        } else {
          toast({
            title: "something went wrong",
          });
          console.error("Error approving teacher:", res.statusText);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

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
        {isLoading ? (
          <Skeleton />
        ) : (
          teachers.map((teacher: any) => (
            <TableRow key={teacher?.id}>
              <TableCell className="font-medium">{teacher.fullName}</TableCell>
              <TableCell>{teacher.phone_number}</TableCell>
              <TableCell>
                <div>
                  <Button
                    onClick={() => handleApproveTeacher(teacher?.id)}
                    className="bg-white border border-gray-300"
                  >
                    Approve
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default TeacherRequest;
