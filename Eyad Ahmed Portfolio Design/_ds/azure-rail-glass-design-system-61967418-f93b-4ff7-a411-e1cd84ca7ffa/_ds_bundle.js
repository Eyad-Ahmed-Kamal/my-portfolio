/* @ds-bundle: {"format":3,"namespace":"AzureRailGlassDesignSystem_619674","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"GlassPanel","sourcePath":"components/core/GlassPanel.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"StatusDot","sourcePath":"components/core/StatusDot.jsx"},{"name":"KpiStat","sourcePath":"components/data/KpiStat.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"af574dcb24de","components/core/Badge.jsx":"22f3dcf39d08","components/core/Button.jsx":"603e5e11b721","components/core/GlassPanel.jsx":"4820392c02fd","components/core/IconButton.jsx":"fd47d22ed218","components/core/StatusDot.jsx":"de69f3bdfdf1","components/data/KpiStat.jsx":"b87216d6d071","components/forms/Checkbox.jsx":"a81854d1a780","components/forms/SearchField.jsx":"959f725e74f9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AzureRailGlassDesignSystem_619674 = window.AzureRailGlassDesignSystem_619674 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — compact status / role pill. Tinted-wash background with matching
 * text color. Use `tone` for semantic meaning, `dot` to prefix a status dot.
 */
function Badge({
  tone = 'primary',
  dot = false,
  className = '',
  style = {},
  children,
  ...rest
}) {
  const tones = {
    primary: {
      bg: 'var(--color-primary-wash)',
      fg: 'var(--color-primary)'
    },
    navy: {
      bg: 'var(--color-navy-wash)',
      fg: 'var(--color-navy)'
    },
    mint: {
      bg: 'var(--color-mint-wash)',
      fg: '#018a5c'
    },
    crimson: {
      bg: 'var(--color-crimson-wash)',
      fg: '#d6324f'
    },
    neutral: {
      bg: 'rgba(100,116,139,0.12)',
      fg: 'var(--color-muted)'
    }
  };
  const t = tones[tone] || tones.primary;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `arg-badge ${className}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: '24px',
      padding: '0 var(--space-3)',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.02em',
      borderRadius: 'var(--radius-full)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action control. Filled Transport Blue by default;
 * the "glass" variant is the outlined frosted style with an optional
 * 45°-rotated square arrow-surrogate (an Azure Rail signature).
 */
function Button({
  variant = 'primary',
  size = 'md',
  arrow = false,
  disabled = false,
  icon = null,
  className = '',
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      h: '36px',
      px: 'var(--space-4)',
      fs: 'var(--text-sm)'
    },
    md: {
      h: '44px',
      px: 'var(--space-5)',
      fs: 'var(--text-body)'
    },
    lg: {
      h: '52px',
      px: 'var(--space-6)',
      fs: 'var(--text-subhead)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: '#fff',
      border: '1px solid var(--color-primary)',
      boxShadow: 'var(--shadow-button)'
    },
    glass: {
      background: 'var(--surface-glass-input)',
      color: 'var(--color-navy)',
      border: '2px solid var(--color-navy)',
      backdropFilter: 'blur(var(--blur-panel))',
      WebkitBackdropFilter: 'blur(var(--blur-panel))',
      boxShadow: 'none'
    },
    secondary: {
      background: 'var(--surface-glass)',
      color: 'var(--color-text)',
      border: '1px solid var(--glass-border)',
      backdropFilter: 'blur(var(--blur-panel))',
      WebkitBackdropFilter: 'blur(var(--blur-panel))',
      boxShadow: 'var(--shadow-glass)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    className: `arg-btn arg-btn--${variant} ${className}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      height: s.h,
      padding: `0 ${s.px}`,
      fontFamily: 'var(--font-heading)',
      fontSize: s.fs,
      fontWeight: 'var(--weight-semibold)',
      borderRadius: 'var(--radius-element)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur) var(--ease-out), background var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    }
  }, rest), icon, children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: '8px',
      height: '8px',
      marginLeft: 'var(--space-1)',
      borderTop: '2px solid currentColor',
      borderRight: '2px solid currentColor',
      transform: 'rotate(45deg)'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/GlassPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GlassPanel — the fundamental container of the Azure Rail Glass system.
 * Tiered transparency surface with backdrop blur and a bright light-catching edge.
 */
function GlassPanel({
  level = 'panel',
  as = 'div',
  padding = 'md',
  className = '',
  style = {},
  children,
  ...rest
}) {
  const Tag = as;
  const surfaces = {
    hero: {
      bg: 'var(--surface-glass-strong)',
      blur: 'var(--blur-glass)',
      border: 'var(--glass-border)',
      radius: 'var(--radius-panel)'
    },
    panel: {
      bg: 'var(--surface-glass)',
      blur: 'var(--blur-glass)',
      border: 'var(--glass-border)',
      radius: 'var(--radius-panel)'
    },
    card: {
      bg: 'var(--surface-glass-panel)',
      blur: 'var(--blur-panel)',
      border: 'var(--glass-border-soft)',
      radius: 'var(--radius-element)'
    },
    row: {
      bg: 'var(--surface-glass-row)',
      blur: 'var(--blur-panel)',
      border: 'var(--glass-border-soft)',
      radius: 'var(--radius-element)'
    }
  };
  const pads = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-5)',
    lg: 'var(--space-6)'
  };
  const s = surfaces[level] || surfaces.panel;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `arg-glass ${className}`,
    style: {
      background: s.bg,
      backdropFilter: `blur(${s.blur})`,
      WebkitBackdropFilter: `blur(${s.blur})`,
      border: `1px solid ${s.border}`,
      borderRadius: s.radius,
      boxShadow: 'var(--shadow-glass)',
      padding: pads[padding] ?? pads.md,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GlassPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlassPanel.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a circular or rounded frosted-glass control holding a single icon.
 */
function IconButton({
  size = 'md',
  shape = 'circle',
  variant = 'glass',
  label,
  className = '',
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    glass: {
      background: 'var(--surface-glass)',
      color: 'var(--color-navy)',
      border: '1px solid var(--glass-border)'
    },
    primary: {
      background: 'var(--color-primary)',
      color: '#fff',
      border: '1px solid var(--color-primary)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-muted)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.glass;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    className: `arg-iconbtn ${className}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: `${dim}px`,
      height: `${dim}px`,
      borderRadius: shape === 'circle' ? 'var(--radius-full)' : 'var(--radius-element)',
      backdropFilter: 'blur(var(--blur-panel))',
      WebkitBackdropFilter: 'blur(var(--blur-panel))',
      cursor: 'pointer',
      boxShadow: variant === 'glass' ? 'var(--shadow-glass)' : 'none',
      transition: 'transform var(--dur) var(--ease-out), background var(--dur) var(--ease-out)',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatusDot — small presence indicator with an optional pulse ring.
 * mint = online/on-time, crimson = delayed, muted = offline.
 */
function StatusDot({
  status = 'online',
  size = 8,
  pulse = true,
  style = {},
  ...rest
}) {
  const colors = {
    online: 'var(--color-mint)',
    delayed: 'var(--color-crimson)',
    warning: 'var(--color-amber)',
    offline: 'var(--color-muted)'
  };
  const c = colors[status] || colors.online;
  const animate = pulse && status !== 'offline';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "arg-statusdot",
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: `${size}px`,
      height: `${size}px`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: c
    }
  }), animate && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: c,
      opacity: 0.5,
      animation: 'arg-pulse 1.8s var(--ease-out) infinite'
    }
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes arg-pulse{0%{transform:scale(1);opacity:.5}70%,100%{transform:scale(2.4);opacity:0}}`));
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular "totem". Renders an image or initials; optional presence
 * dot in the corner. `status="offline"` desaturates the image (grayscale).
 */
function Avatar({
  src,
  name = '',
  size = 48,
  status,
  ring = false,
  style = {},
  ...rest
}) {
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const offline = status === 'offline';
  const dotSize = Math.max(8, Math.round(size * 0.22));
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "arg-avatar",
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: `${size}px`,
      height: `${size}px`,
      flex: '0 0 auto',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: src ? 'transparent' : 'var(--color-primary-wash)',
      color: 'var(--color-primary)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: `${Math.round(size * 0.36)}px`,
      border: ring ? '2px solid var(--glass-border)' : 'none',
      boxShadow: ring ? 'var(--shadow-glass)' : 'none'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: offline ? 'grayscale(1)' : 'none'
    }
  }) : initials || '–'), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      display: 'inline-flex',
      padding: '2px',
      borderRadius: '50%',
      background: 'var(--color-background)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusDot, {
    status: status,
    size: dotSize - 4,
    pulse: !offline
  })));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/KpiStat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KpiStat — headline metric block. Uppercase label, large Outfit value,
 * and an optional delta chip whose color reflects the trend direction.
 */
function KpiStat({
  label,
  value,
  unit,
  delta,
  trend = 'up',
  align = 'left',
  style = {},
  ...rest
}) {
  const positive = trend === 'up';
  const deltaColor = trend === 'flat' ? 'var(--color-muted)' : positive ? '#018a5c' : '#d6324f';
  const deltaBg = trend === 'flat' ? 'rgba(100,116,139,0.12)' : positive ? 'var(--color-mint-wash)' : 'var(--color-crimson-wash)';
  const arrow = trend === 'flat' ? '→' : positive ? '↑' : '↓';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "arg-kpi",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--color-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-2)',
      justifyContent: align === 'center' ? 'center' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--text-kpi)',
      fontWeight: 'var(--weight-bold)',
      lineHeight: 1,
      color: 'var(--color-navy)'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--text-subhead)',
      color: 'var(--color-muted)'
    }
  }, unit)), delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: align === 'center' ? 'center' : 'flex-start',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      height: '22px',
      padding: '0 var(--space-2)',
      borderRadius: 'var(--radius-full)',
      background: deltaBg,
      color: deltaColor,
      fontFamily: 'var(--font-data)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, arrow), delta));
}
Object.assign(__ds_scope, { KpiStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KpiStat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — 18px square, 4px radius. Checked fills Transport Blue.
 * Used in the Network Map line-filter panel. Controlled or uncontrolled.
 */
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on, e);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    className: "arg-checkbox",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--color-text)',
      userSelect: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '18px',
      height: '18px',
      flex: '0 0 auto',
      borderRadius: '4px',
      background: on ? 'var(--color-primary)' : 'var(--surface-glass-input)',
      border: `1.5px solid ${on ? 'var(--color-primary)' : 'var(--color-faint)'}`,
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2 5 8.5l4.5-5",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", {
    onClick: toggle
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SearchField — frosted glass search input. Expands on focus (200ms).
 * Pass an `icon` node (e.g. a Lucide search glyph) for the leading adornment.
 */
function SearchField({
  placeholder = 'Search…',
  icon = null,
  width = 400,
  expandWidth,
  value,
  onChange,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const w = focused && expandWidth ? expandWidth : width;
  return /*#__PURE__*/React.createElement("div", {
    className: "arg-search",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      height: '48px',
      width: typeof w === 'number' ? `${w}px` : w,
      padding: '0 var(--space-4)',
      background: focused ? 'var(--surface-glass-hover)' : 'var(--surface-glass-input)',
      backdropFilter: 'blur(var(--blur-glass))',
      WebkitBackdropFilter: 'blur(var(--blur-glass))',
      border: '1px solid var(--glass-border-soft)',
      borderRadius: 'var(--radius-full)',
      boxShadow: focused ? 'var(--shadow-glass)' : 'none',
      transition: 'width var(--dur) var(--ease-out), background var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--color-muted)',
      flex: '0 0 auto'
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    type: "text",
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--color-text)'
    }
  }, rest)));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.GlassPanel = __ds_scope.GlassPanel;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.KpiStat = __ds_scope.KpiStat;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.SearchField = __ds_scope.SearchField;

})();
