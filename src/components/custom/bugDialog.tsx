import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const BugDialog = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant="outline">Report Bug</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Bug-Report:</DialogTitle>
            <DialogDescription>
              Bitte Beschreibe den Fehler so ausführlich wie möglich!
            </DialogDescription>
          </DialogHeader>
          <Label htmlFor="select">Welche Art von Fehler ist es:</Label>
          <Select>
            <SelectTrigger></SelectTrigger>
            <SelectContent>
              <SelectItem value="formating">Lied falsch formatiert</SelectItem>
              <SelectItem value="text_error">Fehler im Liedtext</SelectItem>
              <SelectItem value="application">
                Probleme beim Bedienen der Website
              </SelectItem>
            </SelectContent>
          </Select>
          <Label htmlFor="error_description">Beschreibe den Fehler:</Label>
          <Textarea id="error_description" maxLength={250}></Textarea>
          <Label htmlFor="browser">Benutztes Gerät/benutzer Browser:</Label>
          <Input id="browser" type="text"></Input>
          <DialogFooter>
            <Button type="submit">Abschicken</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default BugDialog;
