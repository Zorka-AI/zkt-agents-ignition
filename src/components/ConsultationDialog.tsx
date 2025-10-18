import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, Mail, Phone, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ConsultationDialogProps {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const ConsultationDialog = ({ trigger, open: externalOpen, onOpenChange: externalOnOpenChange }: ConsultationDialogProps) => {
  const { t } = useLanguage();
  const [internalOpen, setInternalOpen] = useState(false);
  
  const open = externalOpen !== undefined ? externalOpen : internalOpen;
  const setOpen = externalOnOpenChange || setInternalOpen;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: t('consultation.success.title'),
      description: t('consultation.success.description'),
    });
    setOpen(false);
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl text-foreground">{t('consultation.title')}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {t('consultation.description')}
          </DialogDescription>
          <div className="pt-4 space-y-2 border-t mt-4">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+491234567890" className="hover:text-primary transition-colors">
                +49 123 456 7890
              </a>
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:contact@zktagents.com" className="hover:text-primary transition-colors">
                contact@zktagents.com
              </a>
            </p>
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {t('consultation.form.name')}
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {t('consultation.form.email')}
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {t('consultation.form.phone')}
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">{t('consultation.form.company')}</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t('consultation.form.message')}</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full gap-2 gradient-primary">
            <Calendar className="w-4 h-4" />
            {t('consultation.form.submit')}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationDialog;
