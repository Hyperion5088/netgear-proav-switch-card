# NETGEAR Pro AV Switch Card

![NETGEAR Pro AV Switch Card logo](brand/logo.png)

Local Lovelace card for the [`NETGEAR Pro AV Switch`](https://github.com/Hyperion5088/homeassistant-netgear-proav) Home Assistant integration.

This repository is the HACS dashboard/plugin card. The companion integration is [`homeassistant-netgear-proav`](https://github.com/Hyperion5088/homeassistant-netgear-proav).

[![Add this repository to HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Hyperion5088&repository=homeassistant-netgear-proav-switch-card&category=plugin)

## Installation

### HACS

1. Install the companion [`homeassistant-netgear-proav`](https://github.com/Hyperion5088/homeassistant-netgear-proav) integration first.
2. Use the button above, or add this repository to HACS manually:
   - Repository: `https://github.com/Hyperion5088/homeassistant-netgear-proav-switch-card`
   - Category: `Dashboard`
3. Install `NETGEAR Pro AV Switch Card` from HACS.
4. Refresh the browser after HACS adds the dashboard resource.

HACS serves the card from:

```text
/hacsfiles/homeassistant-netgear-proav-switch-card/netgear-proav-switch-card.js
```

The custom card type is:

```yaml
type: custom:netgear-proav-switch-card
```

### Manual

Copy `dist/netgear-proav-switch-card.js` to your Home Assistant `www` directory and add it as a dashboard resource:

```yaml
url: /local/netgear-proav-switch-card.js
type: module
```

## Example

Single switch:

```yaml
type: custom:netgear-proav-switch-card
name: Core Switch
width: 100%
```

Multiple switches:

```yaml
type: custom:netgear-proav-switch-card
switches:
  - name: Core Switch
  - name: AV Switch
  - name: Studio Switch
width: 100%
```

The visual editor supports:

- card title
- adding switches by selecting one of the switch's link-state entities with Home Assistant's entity picker
- single switch name
- card width, such as `100%`, `720px`, or `48rem`
- a switch list using one switch name per line
- show/hide options for the switch faceplate/key, switch info, selected-port data, switch controls, and port controls
- individual control toggles for protection lock, admin, bounce, PoE, PoE reset, pause polling, full poll, save config, and fan mode

The card discovers entities from the Home Assistant device registry first, using the configured switch name to match the HA device and its entities. It then falls back to friendly/original entity names for the selected switch.

The card follows the Home Assistant custom-card editor pattern:

- invalid configuration throws from `setConfig`, allowing Home Assistant to show a native error card
- the card picker metadata includes a documentation URL
- the visual editor dispatches `config-changed` events after edits
- sections-view grid sizing is declared with `getGridOptions`

Ports are shown as grey when inactive, green when active, and blue when active with PoE being delivered. Hovering over a port shows the available port data. Selecting a port opens its detail and control area. If the switch faceplate is hidden, the selected-port heading becomes a dropdown selector instead.

Known NETGEAR Pro AV models are rendered with model-aware physical port groups:

- RJ45 and RJ45 PoE ports use square jack styling.
- SFP, SFP+, and SFP28 ports use narrow cage styling.
- QSFP+ and QSFP28 ports use wider cage styling.
- Combo ports use a split outline.
- Modular/chassis ports use dashed module-bay styling.

The card includes layout metadata for M4250, M4300, M4350, and M4500 Pro AV models, keyed by both marketing model and SKU where known. Known models use their catalog layout and row width. Models with 16 or fewer ports are treated as single-row unless explicitly marked otherwise; larger models use odd/even two-row ordering unless the catalog provides a single-row override. Unknown models fall back to API/media-type detection and numeric ordering.

LAG interfaces are not drawn as physical ports. They are shown in a separate logical LAG section below the front-panel layout, with member ports shown when Home Assistant exposes them.
