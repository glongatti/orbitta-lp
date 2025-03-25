"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface WhatsAppDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhatsAppDialog({ isOpen, onClose }: WhatsAppDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#1a1a1a] border-white/10 max-w-xl p-0">
        <VisuallyHidden>
          <DialogTitle>Fale com um especialista</DialogTitle>
        </VisuallyHidden>
        <iframe
          src="https://app.leadster.com.br/capture/0OwLA1N2QNgK3ZiI"
          width="100%"
          height="600px"
          frameBorder="0"
          style={{
            borderRadius: '0.75rem',
          }}
        />
      </DialogContent>
    </Dialog>
  );
}