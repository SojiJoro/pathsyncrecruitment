'use client';

import { useState, useRef, useEffect } from 'react';
import { useAccessibility } from '@/contexts/AccessibilityContext';

export default function AccessibilityToolbar() {
  const { settings, updateSettings, resetSettings } = useAccessibility();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close panel when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        panelRef.current &&
        buttonRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  };

  const fontSizeLabels = {
    normal: '100%',
    large: '115%',
    'x-large': '130%',
  };

  return (
    <div className="relative" onKeyDown={handleKeyDown}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
        aria-label="Accessibility options"
        className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-neutral-border hover:border-primary hover:bg-primary/5 transition-colors min-h-touch"
      >
        <AccessibilityIcon />
        <span className="hidden sm:inline text-sm font-medium">Accessibility</span>
      </button>

      {isOpen && (
        <div
          ref={panelRef}
          id="accessibility-panel"
          role="dialog"
          aria-label="Accessibility settings"
          className="absolute right-0 mt-2 w-80 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-border z-50 overflow-hidden"
        >
          <div className="p-4 border-b border-neutral-border">
            <h2 className="font-semibold text-lg">Accessibility Settings</h2>
            <p className="text-sm text-neutral-text-secondary mt-1">
              Customize your viewing experience
            </p>
          </div>

          <div className="p-4 space-y-6">
            {/* Font Size */}
            <div>
              <label className="block font-medium mb-2" id="font-size-label">
                Text Size
              </label>
              <div
                role="group"
                aria-labelledby="font-size-label"
                className="flex gap-2"
              >
                {(['normal', 'large', 'x-large'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => updateSettings({ fontSize: size })}
                    aria-pressed={settings.fontSize === size}
                    className={`flex-1 py-2 px-3 rounded-lg border-2 font-medium transition-all ${
                      settings.fontSize === size
                        ? 'border-primary bg-primary text-white'
                        : 'border-neutral-border hover:border-primary/50'
                    }`}
                  >
                    {fontSizeLabels[size]}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle Options */}
            <div className="space-y-3">
              <ToggleOption
                id="high-contrast"
                label="High Contrast"
                description="Increases contrast for better visibility"
                checked={settings.highContrast}
                onChange={(checked) => updateSettings({ highContrast: checked })}
              />

              <ToggleOption
                id="dyslexia-font"
                label="Dyslexia-Friendly Font"
                description="Uses OpenDyslexic font for easier reading"
                checked={settings.dyslexiaFont}
                onChange={(checked) => updateSettings({ dyslexiaFont: checked })}
              />

              <ToggleOption
                id="reduced-motion"
                label="Reduce Motion"
                description="Minimizes animations and transitions"
                checked={settings.reducedMotion}
                onChange={(checked) => updateSettings({ reducedMotion: checked })}
              />
            </div>
          </div>

          <div className="p-4 border-t border-neutral-border bg-neutral-50">
            <button
              onClick={resetSettings}
              className="w-full py-2 px-4 text-sm font-medium text-neutral-text-secondary hover:text-primary transition-colors"
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ToggleOption({
  id,
  label,
  description,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <label htmlFor={id} className="font-medium cursor-pointer">
          {label}
        </label>
        <p className="text-sm text-neutral-text-secondary">{description}</p>
      </div>
      <button
        id={id}
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative shrink-0 w-12 h-7 rounded-full transition-colors ${
          checked ? 'bg-primary' : 'bg-neutral-300'
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
        <span className="sr-only">{checked ? 'Enabled' : 'Disabled'}</span>
      </button>
    </div>
  );
}

function AccessibilityIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="4" r="2" />
      <path d="M12 6v6" />
      <path d="M8 12h8" />
      <path d="M10 18l2-6 2 6" />
      <path d="M8 21h2" />
      <path d="M14 21h2" />
    </svg>
  );
}
