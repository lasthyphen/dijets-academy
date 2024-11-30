import type { LucideIcon } from 'lucide-react';
import { TerminalIcon } from 'lucide-react';
import { CommandLineIcon } from '@heroicons/react/24/outline';

export function create({
  icon: Icon,
}: {
  icon?: LucideIcon;
}): React.ReactElement {
  return (
    <div className="rounded-md border p-1 shadow-sm">
      {Icon ? <Icon /> : <CommandLineIcon className="size-6" />}
    </div>
  );
}
