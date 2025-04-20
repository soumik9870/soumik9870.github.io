
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="top-right"
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toaster]:bg-black/30 group-[.toaster]:backdrop-blur-xl group-[.toaster]:border-white/10 group-[.toaster]:text-white group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-gray-300",
          actionButton: "group-[.toast]:bg-blue-500 group-[.toast]:text-white",
          cancelButton: "group-[.toast]:bg-white/10 group-[.toast]:text-white",
          success: "group-[.toaster]:!bg-black/30 group-[.toaster]:!text-green-400",
          error: "group-[.toaster]:!bg-black/30 group-[.toaster]:!text-red-400",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }

