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
import { Textarea } from "../ui/textarea";

const SongDialog = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant="outline">Report Bug</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Liedervorschlag:</DialogTitle>
            <DialogDescription>
              Ist dein Lieblingslied noch nicht dabei? Dann schlag es hier gerne
              vor!
            </DialogDescription>
          </DialogHeader>
          <Label htmlFor="name">Liedname:</Label>
          <Input id="name" type="text"></Input>
          <Label htmlFor="artist">Interpret:</Label>
          <Input id="artist" type="text"></Input>
          <Label htmlFor="link">Text und Accorde:</Label>
          <Textarea
            id="link"
            placeholder="Gebe einen Link zu einer Textresource an oder füge Text und Accorde hier selbst ein:"
          ></Textarea>
          <p className="text-sm text-muted-foreground">
            Accorde bitte in ()-Klammern vor der jeweiligen Silbe setzen.
          </p>
          <DialogFooter>
            <Button type="submit">Abschicken</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default SongDialog;
