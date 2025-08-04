import { AppRouter } from './router/AppRouter';
import { Toaster } from 'sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

function App() {
  return (
    <>
    <TooltipProvider delayDuration={200}>
    <Toaster position='bottom-right' richColors theme='light' />
      <AppRouter />
    </TooltipProvider>
    </>
  );
}

export default App;
