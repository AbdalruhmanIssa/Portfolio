import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

/** Full-screen image viewer. `items` is [{ src, caption|alt }], `index` is the open one or null. */
export default function Lightbox({ items, index, onChange, onClose }) {
  const open = index !== null && index !== undefined
  const count = items.length

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange((index + 1) % count)
      if (e.key === 'ArrowLeft') onChange((index - 1 + count) % count)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, index, count, onChange, onClose])

  if (!open) return null
  const item = items[index]
  const label = item.caption || item.alt

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-50 flex flex-col bg-black/90 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div className="flex items-center justify-between font-mono text-sm text-dim">
        <span>
          {index + 1}/{count}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="rounded-md p-2 text-fg hover:bg-white/10"
          aria-label="Close image viewer"
        >
          <X className="size-5" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center">
        <img
          src={item.src}
          alt={label}
          className="max-h-full max-w-full rounded-lg border border-line object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => (e.stopPropagation(), onChange((index - 1 + count) % count))}
              className="absolute left-0 rounded-full border border-line bg-panel/80 p-2 text-fg hover:bg-panel-2"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={(e) => (e.stopPropagation(), onChange((index + 1) % count))}
              className="absolute right-0 rounded-full border border-line bg-panel/80 p-2 text-fg hover:bg-panel-2"
              aria-label="Next image"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        )}
      </div>

      <p className="mt-3 text-center font-mono text-sm text-dim">
        <span className="text-green">// </span>
        {label}
      </p>
    </div>,
    document.body,
  )
}
