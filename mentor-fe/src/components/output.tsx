import { useState } from "react";
import { toast } from "sonner";
import { executeCode } from "@/lib/api";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Play } from "lucide-react";

const Output = ({ editorRef, language }: any) => {
  const [output, setOutput] = useState<any[]>();
  const [_isLoading, setIsLoading] = useState(false);
  const [_isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error: any) {
      toast.error("An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button className="my-6" variant="secondary" onClick={runCode}>
        Run Code &nbsp;
        <Play size={20} strokeWidth={3} />
      </Button>
      <Card>
        <CardContent className="w-[555px] h-[800px]">
          {output
            ? output?.map((line: any, i: any) => {
                return <p key={i}>{line}</p>;
              })
            : 'Click "Run code" to see the output'}
        </CardContent>
      </Card>
    </>
  );
};
export default Output;
