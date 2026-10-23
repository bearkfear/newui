export function ProjectArtwork() {
  return (
    <svg
      viewBox="0 0 520 360"
      style={{ width: "100%", height: "auto" }}
      role="img"
      aria-label="Project overview with tasks and release progress"
    >
      <rect width="520" height="360" rx="24" fill="var(--nui-primary-soft)" />
      <rect
        x="28"
        y="28"
        width="464"
        height="304"
        rx="16"
        fill="var(--nui-background)"
        stroke="var(--nui-border)"
      />
      <text
        x="52"
        y="68"
        fill="var(--nui-foreground)"
        font-family="system-ui"
        font-size="20"
        font-weight="600"
      >
        A little more clarity.
      </text>
      <text x="52" y="94" fill="var(--nui-muted-foreground)" font-family="system-ui" font-size="12">
        One workspace for the things that matter.
      </text>
      <rect x="52" y="120" width="192" height="176" rx="10" fill="var(--nui-surface)" />
      <text x="68" y="148" fill="var(--nui-foreground)" font-family="system-ui" font-size="13">
        Release progress
      </text>
      <path
        d="M70 260V225H100V260M116 260V204H146V260M162 260V182H192V260M208 260V164H226V260"
        fill="var(--nui-primary)"
      />
      <rect x="264" y="120" width="204" height="48" rx="10" fill="var(--nui-success-soft)" />
      <text x="280" y="150" fill="var(--nui-success-text)" font-family="system-ui" font-size="13">
        Design review completed
      </text>
      <rect x="264" y="184" width="204" height="48" rx="10" fill="var(--nui-surface)" />
      <text x="280" y="214" fill="var(--nui-foreground)" font-family="system-ui" font-size="13">
        Documentation in progress
      </text>
      <rect x="264" y="248" width="204" height="48" rx="10" fill="var(--nui-surface)" />
      <text
        x="280"
        y="278"
        fill="var(--nui-muted-foreground)"
        font-family="system-ui"
        font-size="13"
      >
        Next milestone · Friday
      </text>
    </svg>
  );
}
