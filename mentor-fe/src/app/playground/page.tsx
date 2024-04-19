import { Card } from "@/components/ui/card";
import Code_Editor from "@/components/code-editor";

export default function Playground() {
  return (
    <div className="pt-16">
      <Card>
        <Code_Editor />
      </Card>
    </div>
  );
}
