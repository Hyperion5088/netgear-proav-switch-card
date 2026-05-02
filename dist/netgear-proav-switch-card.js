const NETGEAR_PROAV_LAYOUTS = {
  "M4250-9G1F-PoE+": { groups: [{ label: "PoE", type: "rj45-poe", ports: [1, 8] }, { label: "RJ45", type: "rj45", ports: [9, 9] }, { label: "SFP", type: "sfp", ports: [10, 10] }] },
  "GSM4210PD": { alias: "M4250-9G1F-PoE+" },
  "M4250-8G2XF-PoE+": { groups: [{ label: "PoE", type: "rj45-poe", ports: [1, 8] }, { label: "SFP+", type: "sfp-plus", ports: [9, 10] }] },
  "GSM4210PX": { alias: "M4250-8G2XF-PoE+" },
  "M4250-10G2F-PoE+": { groups: [{ label: "PoE", type: "rj45-poe", ports: [1, 8] }, { label: "RJ45", type: "rj45", ports: [9, 10] }, { label: "SFP", type: "sfp", ports: [11, 12] }] },
  "GSM4212P": { alias: "M4250-10G2F-PoE+" },
  "M4250-10G2XF-PoE+": { groups: [{ label: "PoE", type: "rj45-poe", ports: [1, 8] }, { label: "RJ45", type: "rj45", ports: [9, 10] }, { label: "SFP+", type: "sfp-plus", ports: [11, 12] }] },
  "GSM4212PX": { alias: "M4250-10G2XF-PoE+" },
  "M4250-10G2XF-PoE++": { groups: [{ label: "PoE++", type: "rj45-poe", ports: [1, 8] }, { label: "RJ45", type: "rj45", ports: [9, 10] }, { label: "SFP+", type: "sfp-plus", ports: [11, 12] }] },
  "GSM4212UX": { alias: "M4250-10G2XF-PoE++" },
  "M4250-12M2XF": { groups: [{ label: "2.5G", type: "rj45", ports: [1, 12] }, { label: "SFP+", type: "sfp-plus", ports: [13, 14] }] },
  "MSM4214X": { alias: "M4250-12M2XF" },
  "M4250-16XF": { groups: [{ label: "SFP+", type: "sfp-plus", ports: [1, 16] }] },
  "XSM4216F": { alias: "M4250-16XF" },
  "M4250-26G4F-PoE+": { groups: [{ label: "PoE", type: "rj45-poe", ports: [1, 24] }, { label: "RJ45", type: "rj45", ports: [25, 26] }, { label: "SFP", type: "sfp", ports: [27, 30] }] },
  "GSM4230P": { alias: "M4250-26G4F-PoE+" },
  "M4250-26G4XF-PoE+": { groups: [{ label: "PoE", type: "rj45-poe", ports: [1, 24] }, { label: "RJ45", type: "rj45", ports: [25, 26] }, { label: "SFP+", type: "sfp-plus", ports: [27, 30] }] },
  "GSM4230PX": { alias: "M4250-26G4XF-PoE+" },
  "M4250-26G4F-PoE++": { groups: [{ label: "PoE++", type: "rj45-poe", ports: [1, 24] }, { label: "RJ45", type: "rj45", ports: [25, 26] }, { label: "SFP", type: "sfp", ports: [27, 30] }] },
  "GSM4230UP": { alias: "M4250-26G4F-PoE++" },
  "M4250-40G8F-PoE+": { groups: [{ label: "PoE", type: "rj45-poe", ports: [1, 40] }, { label: "SFP", type: "sfp", ports: [41, 48] }] },
  "GSM4248P": { alias: "M4250-40G8F-PoE+" },
  "M4250-40G8XF-PoE+": { groups: [{ label: "PoE", type: "rj45-poe", ports: [1, 40] }, { label: "SFP+", type: "sfp-plus", ports: [41, 48] }] },
  "GSM4248PX": { alias: "M4250-40G8XF-PoE+" },
  "M4250-40G8XF-PoE++": { groups: [{ label: "PoE++", type: "rj45-poe", ports: [1, 40] }, { label: "SFP+", type: "sfp-plus", ports: [41, 48] }] },
  "GSM4248UX": { alias: "M4250-40G8XF-PoE++" },

  "M4300-8X8F": { groups: [{ label: "10G RJ45", type: "rj45", ports: [1, 8] }, { label: "SFP+", type: "sfp-plus", ports: [9, 16] }] },
  "XSM4316S": { alias: "M4300-8X8F" },
  "M4300-16X": { groups: [{ label: "10G PoE", type: "rj45-poe", ports: [1, 16] }] },
  "XSM4316PA": { alias: "M4300-16X" },
  "XSM4316PB": { alias: "M4300-16X" },
  "M4300-12X12F": { groups: [{ label: "10G RJ45", type: "rj45", ports: [1, 12] }, { label: "SFP+", type: "sfp-plus", ports: [13, 24] }] },
  "XSM4324S": { alias: "M4300-12X12F" },
  "M4300-24X": { groups: [{ label: "10G RJ45", type: "rj45", ports: [1, 24] }, { label: "Shared SFP+", type: "combo", ports: [25, 28] }] },
  "XSM4324CS": { alias: "M4300-24X" },
  "M4300-24XF": { groups: [{ label: "SFP+", type: "sfp-plus", ports: [1, 24] }, { label: "Shared RJ45", type: "combo", ports: [25, 26] }] },
  "XSM4324FS": { alias: "M4300-24XF" },
  "M4300-24X24F": { groups: [{ label: "10G RJ45", type: "rj45", ports: [1, 24] }, { label: "SFP+", type: "sfp-plus", ports: [25, 48] }] },
  "XSM4348S": { alias: "M4300-24X24F" },
  "M4300-48X": { groups: [{ label: "10G RJ45", type: "rj45", ports: [1, 48] }, { label: "Shared SFP+", type: "combo", ports: [49, 52] }] },
  "XSM4348CS": { alias: "M4300-48X" },
  "M4300-48XF": { groups: [{ label: "SFP+", type: "sfp-plus", ports: [1, 48] }, { label: "Shared RJ45", type: "combo", ports: [49, 50] }] },
  "XSM4348FS": { alias: "M4300-48XF" },
  "M4300-28G": { label: "Ports", groups: [{ label: "Ports", type: "mixed", ports: [1, 28], columns: 14, types: [{ type: "rj45", ports: [1, 26] }, { type: "sfp-plus", ports: [27, 28] }] }] },
  "GSM4328S": { alias: "M4300-28G" },
  "M4300-28G-PoE+": { label: "Ports", groups: [{ label: "Ports", type: "mixed", ports: [1, 28], columns: 14, types: [{ type: "rj45-poe", ports: [1, 24] }, { type: "rj45", ports: [25, 26] }, { type: "sfp-plus", ports: [27, 28] }] }] },
  "GSM4328PA": { alias: "M4300-28G-PoE+" },
  "GSM4328PB": { alias: "M4300-28G-PoE+" },
  "M4300-52G": { groups: [{ label: "1G RJ45", type: "rj45", ports: [1, 48] }, { label: "10G RJ45", type: "rj45", ports: [49, 50] }, { label: "SFP+", type: "sfp-plus", ports: [51, 52] }] },
  "GSM4352S": { alias: "M4300-52G" },
  "M4300-52G-PoE+": { groups: [{ label: "PoE", type: "rj45-poe", ports: [1, 48] }, { label: "10G RJ45", type: "rj45", ports: [49, 50] }, { label: "SFP+", type: "sfp-plus", ports: [51, 52] }] },
  "GSM4352PA": { alias: "M4300-52G-PoE+" },
  "GSM4352PB": { alias: "M4300-52G-PoE+" },
  "M4300-96X": { groups: [{ label: "Modular", type: "modular", ports: [1, 96] }] },
  "XSM4396K0": { alias: "M4300-96X" },
  "XSM4396K1": { alias: "M4300-96X" },

  "M4350-24G4XF": { groups: [{ label: "PoE++", type: "rj45-poe", ports: [1, 24] }, { label: "SFP+", type: "sfp-plus", ports: [25, 28] }] },
  "GSM4328": { alias: "M4350-24G4XF" },
  "M4350-48G4XF": { groups: [{ label: "PoE++", type: "rj45-poe", ports: [1, 48] }, { label: "SFP+", type: "sfp-plus", ports: [49, 52] }] },
  "GSM4352": { alias: "M4350-48G4XF" },
  "M4350-44M4X4V": { groups: [{ label: "2.5G PoE++", type: "rj45-poe", ports: [1, 44] }, { label: "10G PoE++", type: "rj45-poe", ports: [45, 48] }, { label: "25G", type: "sfp28", ports: [49, 52] }] },
  "MSM4352": { alias: "M4350-44M4X4V" },
  "M4350-8X8F": { groups: [{ label: "10G RJ45", type: "rj45", ports: [1, 8] }, { label: "SFP+", type: "sfp-plus", ports: [9, 16] }] },
  "XSM4316": { alias: "M4350-8X8F" },
  "M4350-12X12F": { groups: [{ label: "10G RJ45", type: "rj45", ports: [1, 12] }, { label: "SFP+", type: "sfp-plus", ports: [13, 24] }] },
  "XSM4324": { alias: "M4350-12X12F" },
  "M4350-24X4V": { groups: [{ label: "10G PoE", type: "rj45-poe", ports: [1, 24] }, { label: "25G", type: "sfp28", ports: [25, 28] }] },
  "XSM4328CV": { alias: "M4350-24X4V" },
  "M4350-24F4V": { groups: [{ label: "SFP+", type: "sfp-plus", ports: [1, 24] }, { label: "25G", type: "sfp28", ports: [25, 28] }] },
  "XSM4328FV": { alias: "M4350-24F4V" },
  "M4350-36X4V": { groups: [{ label: "10G PoE++", type: "rj45-poe", ports: [1, 36] }, { label: "25G", type: "sfp28", ports: [37, 40] }] },
  "XSM4340CV": { alias: "M4350-36X4V" },
  "M4350-24X8F8V": { groups: [{ label: "10G PoE++", type: "rj45-poe", ports: [1, 24] }, { label: "SFP+", type: "sfp-plus", ports: [25, 32] }, { label: "25G", type: "sfp28", ports: [33, 40] }] },
  "XSM4340V": { alias: "M4350-24X8F8V" },
  "M4350-32F8V": { groups: [{ label: "SFP+", type: "sfp-plus", ports: [1, 32] }, { label: "25G", type: "sfp28", ports: [33, 40] }] },
  "XSM4340FV": { alias: "M4350-32F8V" },
  "M4350-16V4C": { groups: [{ label: "25G", type: "sfp28", ports: [1, 16] }, { label: "100G", type: "qsfp28", ports: [17, 20] }] },
  "VSM4320C": { alias: "M4350-16V4C" },
  "M4350-40X4C": { groups: [{ label: "10G PoE++", type: "rj45-poe", ports: [1, 40] }, { label: "100G", type: "qsfp28", ports: [41, 44] }] },
  "XSM4344C": { alias: "M4350-40X4C" },
  "M4350-24F4X": { groups: [{ label: "2.5G SFP", type: "sfp", ports: [1, 24] }, { label: "Combo", type: "combo", ports: [25, 28] }] },
  "MSM4328F": { alias: "M4350-24F4X" },
  "M4350-8M2V": { groups: [{ label: "2.5G PoE++", type: "rj45-poe", ports: [1, 8] }, { label: "25G", type: "sfp28", ports: [9, 10] }] },
  "MSM4310": { alias: "M4350-8M2V" },
  "M4350-24M4X4V": { groups: [{ label: "2.5G PoE++", type: "rj45-poe", ports: [1, 24] }, { label: "10G PoE++", type: "rj45-poe", ports: [25, 28] }, { label: "25G", type: "sfp28", ports: [29, 32] }] },
  "MSM4332": { alias: "M4350-24M4X4V" },
  "M4350-40F4C": { groups: [{ label: "SFP+", type: "sfp-plus", ports: [1, 40] }, { label: "100G", type: "qsfp28", ports: [41, 44] }] },
  "XSM4344FC": { alias: "M4350-40F4C" },
  "M4350-16M4V": { groups: [{ label: "2.5G PoE++", type: "rj45-poe", ports: [1, 16] }, { label: "25G", type: "sfp28", ports: [17, 20] }] },
  "MSM4320": { alias: "M4350-16M4V" },
  "M4350-16C": { groups: [{ label: "100G", type: "qsfp28", ports: [1, 16] }] },
  "CSM4316": { alias: "M4350-16C" },

  "M4500-32C": { groups: [{ label: "100G", type: "qsfp28", ports: [1, 32] }] },
  "CSM4532": { alias: "M4500-32C" },
  "M4500-48XF8C": { groups: [{ label: "SFP28", type: "sfp28", ports: [1, 48] }, { label: "100G", type: "qsfp28", ports: [49, 56] }] },
  "XSM4556": { alias: "M4500-48XF8C" },
};

class NetgearProAvSwitchCard extends HTMLElement {
  static getConfigElement() {
    return document.createElement("netgear-proav-switch-card-editor");
  }

  static getStubConfig() {
    return {
      name: "NETGEAR Pro AV Switch",
      width: "100%",
    };
  }

  setConfig(config) {
    this.validateConfig(config);
    const switches = this.normalizeSwitches(config);
    if (!switches.length) {
      throw new Error("switch name is required");
    }
    this.config = {
      columns: 12,
      min_port_width: 34,
      max_port_width: 72,
      show_switch_view: true,
      show_switch_info: true,
      show_switch_controls: true,
      show_port_details: true,
      show_port_controls: true,
      control_lock: true,
      control_admin: true,
      control_bounce: true,
      control_poe: true,
      control_poe_reset: true,
      control_pause_polling: true,
      control_full_poll: true,
      control_save_config: true,
      control_fan_mode: true,
      width: "100%",
      ...config,
      switches,
    };
    if (!this.selectedSwitch || !switches.some((item) => this.switchKey(item) === this.selectedSwitch)) {
      this.selectedSwitch = this.switchKey(switches[0]);
    }
    this.selectedPort = this.selectedPort || null;
    this.render();
  }

  set hass(hass) {
    this._hass = hass;
    if (this.portPickerOpen) {
      this.deferRenderUntilPortPickerCloses = true;
      return;
    }
    this.render();
  }

  getCardSize() {
    return 6;
  }

  getGridOptions() {
    return {
      columns: "full",
      min_columns: 6,
      rows: 8,
      min_rows: 5,
    };
  }

  validateConfig(config) {
    if (!config || typeof config !== "object" || Array.isArray(config)) {
      throw new Error("Card configuration must be an object.");
    }
    if (config.switches !== undefined && !Array.isArray(config.switches)) {
      throw new Error("switches must be a list of switch names or switch objects.");
    }
    if (Array.isArray(config.switches)) {
      for (const item of config.switches) {
        if (typeof item !== "string" && (!item || typeof item !== "object" || Array.isArray(item))) {
          throw new Error("Each switch must be a name string or an object with name/device_id.");
        }
      }
    }
    if (config.width !== undefined && typeof config.width !== "string") {
      throw new Error("width must be a CSS size string such as 100%, 720px, or 48rem.");
    }
    for (const field of ["min_port_width", "max_port_width"]) {
      if (config[field] !== undefined && !Number.isFinite(Number(config[field]))) {
        throw new Error(`${field} must be a number.`);
      }
    }
  }

  render() {
    if (!this.config || !this._hass) {
      return;
    }

    this.renderCache = {
      deviceEntities: new Map(),
      entityCandidates: new Map(),
      stateEntityIds: null,
      switchDevices: new Map(),
    };

    const activeSwitch = this.currentSwitch();
    const switchStatus = this.switchStatus(activeSwitch);
    const allPorts = this.discoverPorts(activeSwitch);
    const physicalPorts = allPorts.filter((port) => !port.isLag);
    const lagPorts = allPorts.filter((port) => port.isLag);
    const portGroups = this.layoutPortGroups(activeSwitch, physicalPorts);
    if (!this.selectedPort && allPorts.length) {
      this.selectedPort = allPorts[0].label;
    }

    const selected = allPorts.find((port) => port.label === this.selectedPort) || allPorts[0];
    if (selected && selected.label !== this.selectedPort) {
      this.selectedPort = selected.label;
    }
    const title = activeSwitch.name || this.switchName(allPorts);

    this.innerHTML = `
      <ha-card style="--ng-card-width:${this.escapeAttr(this.config.width || "100%")}">
        <style>
          ${this.styles()}
        </style>
        <div class="card">
          <header class="header">
            <div>
              <div class="eyebrow">NETGEAR Pro AV</div>
              <h2>${this.escape(title)}</h2>
            </div>
            <div class="summary">
              <span>${physicalPorts.filter((port) => port.active).length}/${physicalPorts.length} active</span>
              <span>${physicalPorts.filter((port) => port.poeDelivering).length} PoE</span>
              ${lagPorts.length ? `<span>${lagPorts.length} LAG</span>` : ""}
            </div>
          </header>

          ${this.renderSwitchSelector()}
          ${this.renderSwitchStatus(switchStatus)}
          ${this.config.show_switch_view ? this.renderLegend() : ""}

          ${this.config.show_switch_view ? `<div class="switch-shell" style="${this.faceplateScaleStyle(portGroups)}">
            ${this.renderPortGroups(activeSwitch, portGroups)}
            ${this.renderLagGroup(lagPorts)}
          </div>` : ""}

          ${selected ? this.renderDetails(selected, allPorts) : this.renderEmpty()}
        </div>
      </ha-card>
    `;

    this.bindEvents();
  }

  normalizeSwitches(config) {
    if (Array.isArray(config.switches)) {
      return config.switches
        .map((item) => (typeof item === "string" ? { name: item } : item))
        .filter((item) => item && (item.name || item.device_id))
        .map((item) => ({
          columns: config.columns || 12,
          ...item,
        }));
    }
    if (config.name || config.device_id) {
      return [
        {
          name: config.name,
          device_id: config.device_id,
          columns: config.columns || 12,
        },
      ];
    }
    return [];
  }

  currentSwitch() {
    return (
      this.config.switches.find((item) => this.switchKey(item) === this.selectedSwitch) ||
      this.config.switches[0]
    );
  }

  switchKey(item) {
    return item.device_id || item.name;
  }

  switchSubtitle(item) {
    if (item.device_id) {
      return "device id";
    }
    return "device/name matched";
  }

  entityText(entityId) {
    const state = this._hass.states[entityId];
    const info = this._hass.entities?.[entityId];
    return [
      entityId,
      state?.attributes?.friendly_name,
      info?.name,
      info?.original_name,
    ].filter(Boolean).join(" ");
  }

  cleanName(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/network switch - /g, " ")
      .replace(/_/g, " ")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  switchDevice(activeSwitch) {
    const cacheKey = this.switchKey(activeSwitch);
    if (this.renderCache?.switchDevices?.has(cacheKey)) {
      return this.renderCache.switchDevices.get(cacheKey);
    }

    const devices = this._hass.devices || {};
    if (activeSwitch.device_id && devices[activeSwitch.device_id]) {
      const device = { id: activeSwitch.device_id, ...devices[activeSwitch.device_id] };
      this.renderCache?.switchDevices?.set(cacheKey, device);
      return device;
    }

    const target = this.cleanName(activeSwitch.name || "");
    if (!target) {
      this.renderCache?.switchDevices?.set(cacheKey, null);
      return null;
    }

    for (const [id, device] of Object.entries(devices)) {
      const names = [
        device.name_by_user,
        device.name,
        device.model,
        device.model_id,
      ].filter(Boolean).map((value) => this.cleanName(value));
      if (names.includes(target) || names.some((name) => name && (name.includes(target) || target.includes(name)))) {
        const matchedDevice = { id, ...device };
        this.renderCache?.switchDevices?.set(cacheKey, matchedDevice);
        return matchedDevice;
      }
    }
    this.renderCache?.switchDevices?.set(cacheKey, null);
    return null;
  }

  deviceEntityIds(activeSwitch) {
    const cacheKey = this.switchKey(activeSwitch);
    if (this.renderCache?.deviceEntities?.has(cacheKey)) {
      return this.renderCache.deviceEntities.get(cacheKey);
    }

    const device = this.switchDevice(activeSwitch);
    if (!device) {
      this.renderCache?.deviceEntities?.set(cacheKey, []);
      return [];
    }
    const entityIds = Object.entries(this._hass.entities || {})
      .filter(([, info]) => info?.device_id === device.id)
      .map(([entityId]) => entityId)
      .filter((entityId) => this._hass.states[entityId]);
    this.renderCache?.deviceEntities?.set(cacheKey, entityIds);
    return entityIds;
  }

  stateEntityIds() {
    if (!this.renderCache) {
      return Object.keys(this._hass.states);
    }
    if (!this.renderCache.stateEntityIds) {
      this.renderCache.stateEntityIds = Object.keys(this._hass.states);
    }
    return this.renderCache.stateEntityIds;
  }

  switchEntityCandidates(activeSwitch, domain) {
    const cacheKey = `${this.switchKey(activeSwitch)}|${domain}`;
    if (this.renderCache?.entityCandidates?.has(cacheKey)) {
      return this.renderCache.entityCandidates.get(cacheKey);
    }

    const deviceEntities = this.deviceEntityIds(activeSwitch)
      .filter((entityId) => entityId.startsWith(`${domain}.`));
    if (deviceEntities.length) {
      this.renderCache?.entityCandidates?.set(cacheKey, deviceEntities);
      return deviceEntities;
    }

    const target = this.cleanName(activeSwitch.name || "");
    if (!target) {
      this.renderCache?.entityCandidates?.set(cacheKey, []);
      return [];
    }
    const candidates = this.stateEntityIds()
      .filter((entityId) => entityId.startsWith(`${domain}.`))
      .filter((entityId) => this.cleanName(this.entityText(entityId)).includes(target));
    this.renderCache?.entityCandidates?.set(cacheKey, candidates);
    return candidates;
  }

  discoverPorts(activeSwitch) {
    const states = this._hass.states;
    const links = this.switchEntityCandidates(activeSwitch, "binary_sensor")
      .filter((entityId) => this.cleanName(this.entityText(entityId)).includes("link state"))
      .map((entityId) => this.buildPort(activeSwitch, entityId, states[entityId]));

    return links.sort((a, b) => this.portSortValue(a.label) - this.portSortValue(b.label));
  }

  renderSwitchSelector() {
    if (this.config.switches.length < 2) {
      return "";
    }

    return `
      <div class="switch-selector" role="tablist">
        ${this.config.switches.map((item) => {
          const selected = this.switchKey(item) === this.selectedSwitch ? " selected" : "";
          return `
            <button class="switch-option${selected}" data-switch="${this.escapeAttr(this.switchKey(item))}" role="tab">
              <span>${this.escape(item.name || item.device_id)}</span>
              <b>${this.escape(this.switchSubtitle(item))}</b>
            </button>
          `;
        }).join("")}
      </div>
    `;
  }

  switchStatus(activeSwitch) {
    const bySuffix = (domain, suffix) => this.findSwitchEntity(activeSwitch, domain, suffix);
    const byIncludes = (domain, includes) => this.findSwitchEntity(activeSwitch, domain, null, includes);
    const fanSensors = this.switchEntityCandidates(activeSwitch, "sensor")
      .filter((entityId) => {
        const text = this.cleanName(this.entityText(entityId));
        return text.includes("fan") && text.includes("speed");
      })
      .sort();

    return {
      cpu: bySuffix("sensor", "cpu_usage"),
      memory: bySuffix("sensor", "memory_usage"),
      temperature: byIncludes("sensor", ["temperature"]),
      poeConsumed: byIncludes("sensor", ["poe_consumed"]),
      poeAvailable: byIncludes("sensor", ["poe_available"]),
      pausePolling: bySuffix("switch", "pause_polling"),
      fullPoll: bySuffix("button", "full_poll"),
      saveConfig: bySuffix("button", "save_config"),
      fanMode: byIncludes("select", ["fan_mode"]),
      fans: fanSensors,
    };
  }

  findSwitchEntity(activeSwitch, domain, suffix, includes = []) {
    return this.switchEntityCandidates(activeSwitch, domain).find((entityId) => {
      const state = this._hass.states[entityId];
      if (state?.attributes?.port) {
        return false;
      }
      const text = this.cleanName(this.entityText(entityId));
      if (suffix && text.includes(this.cleanName(suffix))) {
        return true;
      }
      return includes.every((part) => text.includes(this.cleanName(part)));
    });
  }

  renderSwitchStatus(status) {
    if (!this.config.show_switch_info && !this.config.show_switch_controls) {
      return "";
    }
    const poe = this.poeBudget(status);
    return `
      <section class="switch-status">
        ${this.config.show_switch_info ? `<div class="status-grid">
          ${this.statusChip(status.temperature, "Temp", "thermometer")}
          ${this.statusChip(status.cpu, "CPU", "chip")}
          ${this.statusChip(status.memory, "Memory", "memory")}
          ${poe ? this.staticStatusChip("PoE Budget", poe, "flash") : ""}
          ${this.fanStatusChip(status.fans)}
        </div>` : ""}
        ${this.config.show_switch_controls ? `<div class="switch-controls">
          ${this.config.control_pause_polling ? this.toggleButton(status.pausePolling, "Pause Poll", "pause-circle") : ""}
          ${this.config.control_full_poll ? this.controlButton(status.fullPoll, "press", "Full Poll", "refresh") : ""}
          ${this.config.control_save_config ? this.controlButton(status.saveConfig, "press", "Save Config", "content-save") : ""}
          ${this.config.control_fan_mode ? this.selectControl(status.fanMode, "Fan Mode") : ""}
        </div>` : ""}
      </section>
    `;
  }

  fanStatusChip(fanSensors) {
    const fans = fanSensors
      .map((entityId) => {
        const state = this._hass.states[entityId];
        if (!state) {
          return "";
        }
        const unit = state.attributes.unit_of_measurement || "RPM";
        return `${this.shortFanName(entityId)} - ${state.state} ${String(unit).toUpperCase()}`;
      })
      .filter(Boolean);
    if (!fans.length) {
      return "";
    }
    return this.staticStatusChip("Fans", fans.join(" | "), "fan", fanSensors[0]);
  }

  statusChip(entityId, label, icon) {
    if (!entityId || !this._hass.states[entityId]) {
      return "";
    }
    const state = this._hass.states[entityId];
    const unit = state.attributes.unit_of_measurement || "";
    return this.staticStatusChip(label, `${state.state}${unit ? ` ${unit}` : ""}`, icon, entityId);
  }

  staticStatusChip(label, value, icon, entityId = "") {
    const className = `status-chip status-${this.cleanName(label).replace(/\s+/g, "-")}`;
    return `
      <button class="${this.escapeAttr(className)}" ${entityId ? `data-more-info="${this.escapeAttr(entityId)}"` : ""}>
        <ha-icon icon="mdi:${icon}"></ha-icon>
        <span>${this.escape(label)}</span>
        <b>${this.escape(value)}</b>
      </button>
    `;
  }

  poeBudget(status) {
    const consumed = this.entityState(status.poeConsumed);
    const available = this.entityState(status.poeAvailable);
    if (!consumed && !available) {
      return "";
    }
    return `${consumed || "-"} / ${available || "-"} W`;
  }

  entityState(entityId) {
    if (!entityId || !this._hass.states[entityId]) {
      return "";
    }
    return this._hass.states[entityId].state;
  }

  shortFanName(entityId) {
    const name = this._hass.states[entityId]?.attributes?.friendly_name || entityId;
    const match = name.match(/fan[-\s_]*(\d+)/i);
    return match ? match[1] : name.replace(/.*Fan[-\s_]*/i, "").replace(/ Speed$/i, "");
  }

  buildPort(activeSwitch, linkEntity, linkState) {
    const attrs = linkState.attributes || {};
    const label = String(attrs.port || this.labelFromEntity(linkEntity));
    const suffix = this.suffixFromLabel(label);
    const byPort = (domain, name) => this.findEntity(activeSwitch, domain, name, label, suffix);
    const poeEntity = byPort("sensor", "poe_state");
    const poeSwitch = byPort("switch", "poe_switch");
    const adminSwitch = byPort("switch", "admin_control");
    const lock = byPort("lock", "port_config_protection");
    const adminBounce = byPort("button", "admin_bounce");
    const poeReset = byPort("button", "poe_reset");
    const poeState = poeEntity ? this._hass.states[poeEntity] : null;
    const poeAttrs = poeState?.attributes || {};
    const poeBlock = attrs.poe || {};
    const poePower = this.firstValue(
      poeBlock.power_w,
      poeAttrs.poe_power,
      poeAttrs.power_w,
      poeState?.state,
    );
    const poeDelivering = this.booleanValue(
      poeBlock.delivering,
      poeAttrs.poe_delivering,
      Number.parseFloat(poePower) > 0,
    );

    return {
      label,
      isLag: this.isLagLabel(label),
      linkEntity,
      linkState,
      active: linkState.state === "on",
      unavailable: ["unavailable", "unknown"].includes(linkState.state),
      adminSwitch,
      poeEntity,
      poeSwitch,
      lock,
      adminBounce,
      poeReset,
      poePower,
      poeDelivering,
      attrs,
      poeAttrs,
      speed: this.firstValue(attrs.speed, attrs.max_speed, attrs.physical_status),
      lldp: attrs.lldp || {},
      description: attrs.description,
    };
  }

  isLagLabel(label) {
    return String(label).toLowerCase().includes("lag");
  }

  layoutPortGroups(activeSwitch, ports) {
    const layout = this.resolveLayout(activeSwitch, ports);
    const deviceInfo = this.deviceInfoForPorts(ports);
    const portLabelContext = [
      activeSwitch.model,
      activeSwitch.sku,
      activeSwitch.name,
      deviceInfo?.model,
      deviceInfo?.model_id,
      deviceInfo?.name,
    ].filter(Boolean).join(" ");
    const portsByNumber = new Map(ports.map((port) => [this.portNumber(port.label), port]));
    const used = new Set();
    const assignedPorts = [];

    for (const group of layout.groups || []) {
      for (const number of this.expandPortRange(group.ports)) {
        const port = portsByNumber.get(number);
        if (!port) {
          continue;
        }
        used.add(port.label);
        assignedPorts.push({
          ...port,
          portType: this.groupPortType(group, number),
          portTypeLabel: this.groupPortLabel(group, number, portLabelContext),
          groupLabel: group.label,
        });
      }
    }

    const remaining = ports
      .filter((port) => !used.has(port.label))
      .map((port) => ({ ...port, portType: this.inferPortType(port), groupLabel: "Detected" }));
    const faceplatePorts = [...assignedPorts, ...remaining]
      .sort((a, b) => this.portNumber(a.label) - this.portNumber(b.label));

    if (!faceplatePorts.length) {
      return [{ label: "Ports", type: "auto", columns: 1, ports: [] }];
    }

    const twoRow = this.isTwoRowLayout(layout, faceplatePorts);
    const orderedPorts = twoRow ? this.oddEvenPortOrder(faceplatePorts) : faceplatePorts;
    const layoutColumns = twoRow
      ? Math.ceil(faceplatePorts.length / 2)
      : faceplatePorts.length;

    return [{
      label: "Ports",
      type: "faceplate",
      columns: layoutColumns,
      ports: orderedPorts,
    }];
  }

  isTwoRowLayout(layout, ports) {
    if (layout.rows === 1) {
      return false;
    }
    if (layout.rows === 2) {
      return true;
    }
    if (ports.length <= 16) {
      return false;
    }
    const groupColumns = Math.max(...(layout.groups || []).map((group) => Number(group.columns) || 0), 0);
    if (groupColumns && groupColumns < ports.length) {
      return true;
    }
    return true;
  }

  oddEvenPortOrder(ports) {
    const odds = ports.filter((port) => this.portNumber(port.label) % 2 === 1);
    const evens = ports.filter((port) => this.portNumber(port.label) % 2 === 0);
    return [...odds, ...evens];
  }

  groupPortType(group, portNumber) {
    for (const override of group.types || []) {
      if (this.portInRange(override.ports, portNumber)) {
        return override.type;
      }
    }
    return group.type;
  }

  groupPortLabel(group, portNumber, context = "") {
    const override = (group.types || []).find((item) => this.portInRange(item.ports, portNumber));
    const type = override?.type || this.groupPortType(group, portNumber);
    const label = `${group.label || ""} ${context || ""}`.toLowerCase();
    if (type !== "rj45-poe") {
      return this.portTypeLabel(type);
    }
    if (label.includes("poe++")) {
      return "PoE++";
    }
    if (label.includes("poe+")) {
      return "PoE+";
    }
    return "PoE";
  }

  resolveLayout(activeSwitch, ports) {
    const deviceInfo = this.deviceInfoForPorts(ports);
    const candidates = [
      activeSwitch.model,
      activeSwitch.sku,
      deviceInfo?.model,
      deviceInfo?.model_id,
      activeSwitch.name,
      deviceInfo?.name,
      this.switchName(ports),
    ].filter(Boolean);

    for (const candidate of candidates) {
      const key = this.layoutKey(candidate);
      if (key) {
        return key;
      }
    }

    return { groups: [{ label: "Ports", type: "auto", ports: [1, Math.max(...ports.map((port) => this.portNumber(port.label)), ports.length)] }] };
  }

  deviceInfoForPorts(ports) {
    const entityId = ports.find((port) => port.linkEntity)?.linkEntity;
    const entityInfo = entityId ? this._hass.entities?.[entityId] : null;
    const deviceId = entityInfo?.device_id;
    return deviceId ? this._hass.devices?.[deviceId] : null;
  }

  layoutKey(value) {
    const text = String(value).toUpperCase();
    const entries = Object.entries(NETGEAR_PROAV_LAYOUTS)
      .sort(([left], [right]) => right.length - left.length);
    for (const [key, layout] of entries) {
      if (text.includes(key.toUpperCase())) {
        return layout.alias ? NETGEAR_PROAV_LAYOUTS[layout.alias] : layout;
      }
    }
    return null;
  }

  faceplateScaleStyle(groups) {
    const maxColumns = Math.max(...groups.map((group) => Number(group.columns) || 1), 1);
    const minPortWidth = Number(this.config.min_port_width) || 34;
    const maxPortWidth = Number(this.config.max_port_width) || 72;
    return `--face-columns:${maxColumns}; --port-min:${minPortWidth}px; --port-max:${maxPortWidth}px`;
  }

  renderPortGroups(activeSwitch, groups) {
    const defaultColumns = Number(activeSwitch.columns || this.config.columns) || 12;
    return `
      <div class="port-groups">
        ${groups.map((group) => {
          const columns = group.columns || Math.min(Math.max(group.ports.length, 1), defaultColumns);
          return `
            <section class="port-group port-group-${this.escapeAttr(group.type || "auto")}" style="--columns:${columns}">
              <div class="ports">
          ${group.ports.map((port, index) => this.renderPort(port, index, group.ports.length)).join("")}
              </div>
            </section>
          `;
        }).join("")}
      </div>
    `;
  }

  renderLagGroup(lagPorts) {
    if (!lagPorts.length) {
      return "";
    }

    return `
      <section class="lag-group">
        <div class="port-group-label">LAGs</div>
        <div class="lags" style="--lag-columns:${Math.min(Math.max(lagPorts.length, 1), 14)}">
          ${lagPorts
            .slice()
            .sort((a, b) => this.logicalSortValue(a.label) - this.logicalSortValue(b.label))
            .map((port, index, items) => this.renderLag(port, index, items.length))
            .join("")}
        </div>
      </section>
    `;
  }

  renderLag(port, index = 0, count = 1) {
    const stateClass = port.unavailable ? "unavailable" : port.active ? "active" : "inactive";
    const selectedClass = port.label === this.selectedPort ? " selected" : "";
    const members = this.lagMembers(port);
    return `
      <button class="port lag ${stateClass}${selectedClass} type-lag ${this.tooltipClass(index, count)}" data-port="${this.escapeAttr(port.label)}" title="${this.escapeAttr(this.tooltipText(port))}">
        <span class="port-label">${this.escape(port.label)}</span>
        <span class="port-type">${this.escape(members || "No members")}</span>
        <span class="led"></span>
      </button>
    `;
  }

  findEntity(activeSwitch, domain, name, label, suffix) {
    const expected = this.cleanName(label);
    const expectedSuffix = this.cleanName(suffix);
    const expectedName = this.cleanName(name);
    return this.switchEntityCandidates(activeSwitch, domain).find((entityId) => {
      const state = this._hass.states[entityId];
      const attrs = state.attributes || {};
      const attrPort = this.cleanName(attrs.port || "");
      const text = this.cleanName(this.entityText(entityId));
      const idTail = this.cleanName(entityId.split(".").pop() || "");
      const portMatches = attrPort === expected || text.includes(expected) || idTail.endsWith(expectedSuffix);
      return portMatches && (text.includes(expectedName) || idTail.includes(expectedName));
    });
  }

  renderLegend() {
    return `
      <div class="legend">
        <span><i class="state-pill inactive"></i>Inactive</span>
        <span><i class="state-pill active"></i>Active</span>
        <span><i class="state-pill poe"></i>PoE active</span>
        <span><i class="state-pill unavailable"></i>Unavailable</span>
      </div>
    `;
  }

  renderPort(port, index = 0, count = 1) {
    const stateClass = port.unavailable
      ? "unavailable"
      : port.active && port.poeDelivering
        ? "poe"
        : port.active
          ? "active"
          : "inactive";
    const selectedClass = port.label === this.selectedPort ? " selected" : "";

    const portType = port.portType || this.inferPortType(port);
    return `
      <button class="port ${stateClass}${selectedClass} type-${this.escapeAttr(portType)} ${this.tooltipClass(index, count)}" data-port="${this.escapeAttr(port.label)}" title="${this.escapeAttr(this.tooltipText(port))}">
        <span class="port-label">${this.escape(this.shortLabel(port.label))}</span>
        <span class="port-type">${this.escape(this.displayPortType(port))}</span>
        <span class="led"></span>
        <span class="port-tooltip">${this.tooltipRows(port)}</span>
      </button>
    `;
  }

  lagMembers(port) {
    const members = port.attrs.lag_members;
    if (Array.isArray(members) && members.length) {
      return members.join(", ");
    }
    return this.firstValue(port.attrs.member_ports, port.attrs.members, port.attrs.ports, "");
  }

  renderDetails(port, allPorts = []) {
    return `
      <section class="details">
        <div class="details-head">
          <div>
            <div class="section-label">Selected Port</div>
            ${this.config.show_switch_view ? `<h3>${this.escape(port.label)}</h3>` : this.renderPortSelect(port, allPorts)}
          </div>
          <button class="ghost" data-more-info="${this.escapeAttr(port.linkEntity)}">Details</button>
        </div>

        ${this.config.show_port_details ? `<div class="data-grid">
          ${this.dataRow("Link", port.active ? "Up" : port.unavailable ? "Unavailable" : "Down")}
          ${this.dataRow("Speed", port.speed)}
          ${this.dataRow("Type", this.displayPortType(port))}
          ${this.dataRow("PoE", this.poeSummary(port))}
          ${this.dataRow("LLDP", this.lldpSummary(port))}
          ${this.dataRow("Description", port.description)}
          ${this.dataRow("Profile", port.attrs.profile)}
          ${this.dataRow("VLAN", this.firstValue(port.attrs.pvid, port.attrs.vlans))}
          ${port.isLag ? this.dataRow("Members", this.lagMembers(port)) : ""}
        </div>` : ""}

        ${this.config.show_port_controls ? `<div class="controls">
          ${this.config.control_lock ? this.controlButton(port.lock, this.lockAction(port), this.lockLabel(port), "lock") : ""}
          ${this.config.control_admin ? this.toggleButton(port.adminSwitch, "Admin", "switch") : ""}
          ${this.config.control_bounce ? this.controlButton(port.adminBounce, "press", "Bounce", "button") : ""}
          ${this.config.control_poe ? this.toggleButton(port.poeSwitch, "PoE", "flash") : ""}
          ${this.config.control_poe_reset ? this.controlButton(port.poeReset, "press", "PoE Reset", "restart") : ""}
        </div>` : ""}
      </section>
    `;
  }

  renderPortSelect(selectedPort, allPorts) {
    return `
      <div class="port-picker">
        <button class="port-picker-toggle" data-port-picker-toggle aria-expanded="${this.portPickerOpen ? "true" : "false"}">
          <span>${this.escape(selectedPort.label)}</span>
          <ha-icon icon="mdi:chevron-down"></ha-icon>
        </button>
        ${this.portPickerOpen ? `<div class="port-picker-menu">
          ${allPorts.map((port) => `
            <button class="port-picker-option${port.label === selectedPort.label ? " selected" : ""}" data-port-picker-value="${this.escapeAttr(port.label)}">
              ${this.escape(port.label)}
            </button>
          `).join("")}
        </div>` : ""}
      </div>
    `;
  }

  renderEmpty() {
    const activeSwitch = this.currentSwitch();
    return `<section class="details empty">No port entities found for ${this.escape(activeSwitch.name || activeSwitch.device_id)}.</section>`;
  }

  dataRow(label, value) {
    const display = value === undefined || value === null || value === "" ? "-" : value;
    return `
      <div class="data-row">
        <span>${this.escape(label)}</span>
        <strong>${this.escape(String(display))}</strong>
      </div>
    `;
  }

  toggleButton(entityId, label, icon) {
    if (!entityId) {
      return "";
    }
    const state = this._hass.states[entityId];
    const isOn = state?.state === "on";
    const unavailable = !state || ["unavailable", "unknown"].includes(state.state);
    return `
      <button class="control ${isOn ? "is-on" : ""}" data-toggle="${this.escapeAttr(entityId)}" ${unavailable ? "disabled" : ""}>
        <ha-icon icon="mdi:${icon}"></ha-icon>
        <span>${this.escape(label)}</span>
        <b>${isOn ? "On" : "Off"}</b>
      </button>
    `;
  }

  controlButton(entityId, action, label, icon) {
    if (!entityId) {
      return "";
    }
    const state = this._hass.states[entityId];
    const unavailable = !state || state.state === "unavailable";
    return `
      <button class="control" data-action="${this.escapeAttr(action)}" data-entity="${this.escapeAttr(entityId)}" ${unavailable ? "disabled" : ""}>
        <ha-icon icon="mdi:${icon}"></ha-icon>
        <span>${this.escape(label)}</span>
      </button>
    `;
  }

  selectControl(entityId, label) {
    if (!entityId) {
      return "";
    }
    const state = this._hass.states[entityId];
    if (!state) {
      return "";
    }
    return `
      <button class="control" data-more-info="${this.escapeAttr(entityId)}" ${state.state === "unavailable" ? "disabled" : ""}>
        <ha-icon icon="mdi:tune"></ha-icon>
        <span>${this.escape(label)}</span>
        <b>${this.escape(state.state)}</b>
      </button>
    `;
  }

  bindEvents() {
    const card = this.querySelector(".card");
    if (!card) {
      return;
    }
    card.addEventListener("click", (event) => this.handleCardClick(event));
  }

  handleCardClick(event) {
    const target = event.target;
    const pickerValue = target.closest("[data-port-picker-value]");
    if (pickerValue) {
      this.selectedPort = pickerValue.dataset.portPickerValue;
      this.portPickerOpen = false;
      this.deferRenderUntilPortPickerCloses = false;
      this.render();
      return;
    }

    const pickerToggle = target.closest("[data-port-picker-toggle]");
    if (pickerToggle) {
      this.portPickerOpen = !this.portPickerOpen;
      if (!this.portPickerOpen && this.deferRenderUntilPortPickerCloses) {
        this.deferRenderUntilPortPickerCloses = false;
      }
      this.render();
      return;
    }

    if (this.portPickerOpen && !target.closest(".port-picker")) {
      this.portPickerOpen = false;
      this.deferRenderUntilPortPickerCloses = false;
      this.render();
      return;
    }

    const actionButton = target.closest("[data-action]");
    if (actionButton) {
      if (actionButton.disabled) {
        return;
      }
      const entityId = actionButton.dataset.entity;
      const action = actionButton.dataset.action;
      const domain = entityId.split(".")[0];
      this._hass.callService(domain, action, { entity_id: entityId });
      return;
    }

    const toggleButton = target.closest("[data-toggle]");
    if (toggleButton) {
      if (toggleButton.disabled) {
        return;
      }
      const entityId = toggleButton.dataset.toggle;
      const state = this._hass.states[entityId];
      const domain = entityId.split(".")[0];
      const service = state?.state === "on" ? "turn_off" : "turn_on";
      this._hass.callService(domain, service, { entity_id: entityId });
      return;
    }

    const infoButton = target.closest("[data-more-info]");
    if (infoButton) {
      if (infoButton.disabled) {
        return;
      }
      this.moreInfo(infoButton.dataset.moreInfo);
      return;
    }

    const switchButton = target.closest("[data-switch]");
    if (switchButton) {
      this.selectedSwitch = switchButton.dataset.switch;
      this.selectedPort = null;
      this.portPickerOpen = false;
      this.render();
      return;
    }

    const portButton = target.closest(".port");
    if (portButton) {
      this.selectedPort = portButton.dataset.port;
      this.render();
    }
  }

  moreInfo(entityId) {
    const event = new CustomEvent("hass-more-info", {
      bubbles: true,
      composed: true,
      detail: { entityId },
    });
    this.dispatchEvent(event);
  }

  lockAction(port) {
    const state = port.lock ? this._hass.states[port.lock] : null;
    return state?.state === "locked" ? "unlock" : "lock";
  }

  lockLabel(port) {
    const state = port.lock ? this._hass.states[port.lock] : null;
    return state?.state === "locked" ? "Unlock" : "Lock";
  }

  poeSummary(port) {
    if (!port.poeEntity && !port.poeSwitch) {
      return "Not PoE";
    }
    const power = Number.parseFloat(port.poePower);
    const powerText = Number.isFinite(power) ? `${power} W` : "0 W";
    return `${port.poeDelivering ? "Delivering" : "Idle"} ${powerText}`;
  }

  lldpSummary(port) {
    return this.firstValue(port.lldp.neighbor, port.attrs.neighbor, port.attrs.neighbors, "-");
  }

  tooltipRows(port) {
    const rows = [
      ["Port", port.label],
      ["Type", this.displayPortType(port)],
      ["Link", port.active ? "Up" : port.unavailable ? "Unavailable" : "Down"],
      ["Speed", port.speed],
      ["PoE", this.poeSummary(port)],
      ["LLDP", this.lldpSummary(port)],
      ["Description", port.description],
    ].filter(([, value]) => value !== undefined && value !== null && value !== "" && value !== "-");

    return rows.map(([key, value]) => `<span><b>${this.escape(key)}</b>${this.escape(String(value))}</span>`).join("");
  }

  tooltipText(port) {
    return [
      `Port: ${port.label}`,
      `Type: ${this.displayPortType(port)}`,
      `Link: ${port.active ? "Up" : port.unavailable ? "Unavailable" : "Down"}`,
      port.speed ? `Speed: ${port.speed}` : null,
      this.poeSummary(port) !== "Not PoE" ? `PoE: ${this.poeSummary(port)}` : null,
      this.lldpSummary(port) !== "-" ? `LLDP: ${this.lldpSummary(port)}` : null,
      port.description ? `Description: ${port.description}` : null,
    ].filter(Boolean).join("\\n");
  }

  tooltipClass(index, count) {
    if (count <= 4) {
      return "tooltip-left";
    }
    if (index < 2) {
      return "tooltip-left";
    }
    if (index >= count - 2) {
      return "tooltip-right";
    }
    return "tooltip-center";
  }

  switchName(ports) {
    const first = ports[0]?.linkState?.attributes?.friendly_name;
    return first ? first.replace(/ Link State .*/, "") : this.currentSwitch().name;
  }

  inferPortType(port) {
    const text = [
      port.attrs.media_type,
      port.attrs.port_type,
      port.attrs.speed,
      port.attrs.max_speed,
      port.attrs.physical_status,
      port.attrs.physical_mode,
      port.poeEntity ? "poe" : "",
    ].join(" ").toLowerCase();

    if (text.includes("qsfp28") || text.includes("100g")) {
      return "qsfp28";
    }
    if (text.includes("qsfp")) {
      return "qsfp-plus";
    }
    if (text.includes("sfp28") || text.includes("25g")) {
      return "sfp28";
    }
    if (text.includes("sfp+") || text.includes("10gbase-x") || text.includes("10g fiber")) {
      return "sfp-plus";
    }
    if (text.includes("sfp") || text.includes("fiber") || text.includes("fibre") || text.includes("optical")) {
      return "sfp";
    }
    if (port.poeEntity || port.poeSwitch) {
      return "rj45-poe";
    }
    return "rj45";
  }

  portTypeLabel(type) {
    const labels = {
      "rj45-poe": "PoE",
      rj45: "RJ45",
      sfp: "SFP",
      "sfp-plus": "SFP+",
      sfp28: "SFP28",
      "qsfp-plus": "QSFP+",
      qsfp28: "QSFP28",
      combo: "Combo",
      modular: "Module",
      auto: "Detected",
    };
    return labels[type] || type || "Detected";
  }

  displayPortType(port) {
    return port.portTypeLabel || this.portTypeLabel(port.portType || this.inferPortType(port));
  }

  labelFromEntity(entityId) {
    return entityId.split("_link_state_").pop().replace(/_/g, "/");
  }

  suffixFromLabel(label) {
    return String(label).replace(/\//g, "_").replace(/[^a-zA-Z0-9_]/g, "_").toLowerCase();
  }

  shortLabel(label) {
    const parts = String(label).split("/");
    return parts[parts.length - 1] || label;
  }

  portSortValue(label) {
    const parts = String(label).split("/").map((part) => Number.parseInt(part, 10));
    return parts.reduce((total, value) => total * 1000 + (Number.isFinite(value) ? value : 0), 0);
  }

  logicalSortValue(label) {
    const parts = String(label).match(/\d+/g);
    if (!parts?.length) {
      return this.portSortValue(label);
    }
    return parts
      .map((part) => Number.parseInt(part, 10))
      .reduce((total, value) => total * 1000 + (Number.isFinite(value) ? value : 0), 0);
  }

  portNumber(label) {
    const parts = String(label).split("/");
    const number = Number.parseInt(parts[parts.length - 1], 10);
    return Number.isFinite(number) ? number : 0;
  }

  expandPortRange(range) {
    if (!Array.isArray(range)) {
      return [];
    }
    if (range.length > 2) {
      return range;
    }
    const [start, end] = range;
    const ports = [];
    for (let port = start; port <= end; port += 1) {
      ports.push(port);
    }
    return ports;
  }

  portInRange(range, portNumber) {
    if (!Array.isArray(range)) {
      return false;
    }
    if (range.length > 2) {
      return range.includes(portNumber);
    }
    const [start, end] = range;
    return portNumber >= start && portNumber <= end;
  }

  firstValue(...values) {
    return values.find((value) => value !== undefined && value !== null && value !== "");
  }

  booleanValue(...values) {
    for (const value of values) {
      if (typeof value === "boolean") {
        return value;
      }
      if (typeof value === "number") {
        return value > 0;
      }
      if (typeof value === "string") {
        const clean = value.trim().toLowerCase();
        if (["true", "on", "yes", "delivering"].includes(clean)) {
          return true;
        }
        if (["false", "off", "no", "idle", "0"].includes(clean)) {
          return false;
        }
      }
    }
    return false;
  }

  escape(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  escapeAttr(value) {
    return this.escape(value).replace(/`/g, "&#096;");
  }

  styles() {
    return `
      ha-card {
        background: rgba(18, 16, 30, 0.58);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: var(--ha-card-border-radius, 12px);
        container-type: inline-size;
        color: rgba(255, 255, 255, 0.94);
        overflow: visible;
        width: var(--ng-card-width, 100%);
        max-width: 100%;
      }
      .card {
        padding: 18px;
      }
      .header {
        align-items: flex-start;
        display: flex;
        gap: 16px;
        justify-content: space-between;
        margin-bottom: 12px;
      }
      .eyebrow,
      .section-label {
        color: rgba(255, 255, 255, 0.58);
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0;
        text-transform: uppercase;
      }
      h2,
      h3 {
        font-size: 20px;
        line-height: 1.2;
        margin: 4px 0 0;
      }
      h3 {
        font-size: 18px;
      }
      .summary,
      .legend {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .summary span,
      .legend span {
        align-items: center;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 999px;
        display: inline-flex;
        font-size: 12px;
        gap: 6px;
        min-height: 24px;
        padding: 0 10px;
      }
      .legend {
        justify-content: center;
        margin-bottom: 12px;
      }
      .switch-selector {
        display: grid;
        gap: 8px;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        margin: 0 0 12px;
      }
      .switch-option {
        background: rgba(255, 255, 255, 0.07);
        border: 1px solid rgba(255, 255, 255, 0.13);
        border-radius: 6px;
        color: rgba(255, 255, 255, 0.88);
        cursor: pointer;
        display: grid;
        font: inherit;
        gap: 3px;
        min-height: 46px;
        padding: 8px 10px;
        text-align: left;
      }
      .switch-option.selected {
        border-color: rgba(255, 193, 7, 0.78);
        box-shadow: inset 0 0 0 1px rgba(255, 193, 7, 0.22);
      }
      .switch-option span {
        font-size: 13px;
        font-weight: 800;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .switch-option b {
        color: rgba(255, 255, 255, 0.58);
        font-size: 12px;
        font-weight: 700;
      }
      .switch-status {
        display: grid;
        gap: 10px;
        margin-bottom: 12px;
      }
      .status-grid,
      .switch-controls {
        display: grid;
        gap: 8px;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        width: 100%;
      }
      .status-chip {
        align-items: center;
        background: rgba(255, 255, 255, 0.07);
        border: 1px solid rgba(255, 255, 255, 0.13);
        border-radius: 6px;
        color: rgba(255, 255, 255, 0.9);
        display: grid;
        font: inherit;
        gap: 4px;
        grid-template-columns: 20px 1fr;
        min-height: 42px;
        min-width: 0;
        padding: 8px 10px;
        text-align: left;
      }
      .status-chip.status-fans {
        grid-column: span 2;
      }
      button.status-chip {
        cursor: pointer;
      }
      .status-chip span {
        color: rgba(255, 255, 255, 0.58);
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
      }
      .status-chip b {
        font-size: 13px;
        grid-column: 2;
        overflow-wrap: anywhere;
      }
      .state-pill {
        border-radius: 999px;
        display: inline-block;
        height: 8px;
        width: 20px;
      }
      .state-pill.inactive {
        background: #657080;
      }
      .state-pill.active {
        background: #22c55e;
      }
      .state-pill.poe {
        background: #38bdf8;
      }
      .state-pill.unavailable {
        background: #374151;
      }
      .switch-shell {
        --port-size: clamp(
          var(--port-min, 34px),
          calc((100cqw - 28px - ((var(--face-columns) - 1) * 8px)) / var(--face-columns)),
          var(--port-max, 72px)
        );
        background: linear-gradient(180deg, rgba(8, 10, 18, 0.9), rgba(18, 20, 30, 0.9));
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 8px;
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
        display: grid;
        justify-items: center;
        margin-bottom: 14px;
        padding: 14px;
      }
      .port-groups {
        display: grid;
        gap: 8px;
        justify-items: center;
        max-width: 100%;
      }
      .port-group {
        display: grid;
        gap: 0;
        max-width: 100%;
        width: min(100%, calc((var(--columns) * var(--port-size)) + ((var(--columns) - 1) * 8px)));
      }
      .port-group-label {
        color: rgba(255, 255, 255, 0.54);
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 0;
        text-transform: uppercase;
      }
      .ports {
        display: grid;
        gap: 8px;
        grid-template-columns: repeat(var(--columns), minmax(0, var(--port-size)));
        justify-content: center;
      }
      .lag-group {
        display: grid;
        gap: 7px;
        justify-self: start;
        margin-top: 12px;
        max-width: 100%;
        width: min(100%, calc((var(--lag-columns) * var(--port-size)) + ((var(--lag-columns) - 1) * 8px)));
      }
      .lags {
        display: grid;
        gap: 8px;
        grid-template-columns: repeat(var(--lag-columns), minmax(0, var(--port-size)));
        grid-auto-flow: column;
        justify-content: start;
      }
      .lag {
        border-style: dashed;
      }
      .lag .port-label {
        white-space: nowrap;
      }
      .lag.active,
      .lag.poe {
        border-color: rgba(34, 197, 94, 0.62);
      }
      .lag.selected {
        border-color: rgba(255, 193, 7, 0.82);
        box-shadow: 0 0 0 1px rgba(255, 193, 7, 0.34);
      }
      .port {
        align-items: center;
        aspect-ratio: 1 / 0.78;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 6px;
        color: rgba(255, 255, 255, 0.9);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        font: inherit;
        gap: 5px;
        justify-content: center;
        min-height: 0;
        min-width: 0;
        overflow: visible;
        padding: 4px;
        position: relative;
      }
      .port:hover,
      .port.selected {
        border-color: rgba(255, 193, 7, 0.82);
        box-shadow: 0 0 0 1px rgba(255, 193, 7, 0.34);
      }
      .port-label {
        font-size: clamp(9px, calc(var(--port-size) * 0.24), 12px);
        font-weight: 800;
        line-height: 1;
        max-width: 100%;
        overflow: hidden;
        position: relative;
        text-overflow: ellipsis;
        white-space: nowrap;
        z-index: 1;
      }
      .port-type {
        color: rgba(255, 255, 255, 0.56);
        font-size: clamp(7px, calc(var(--port-size) * 0.17), 9px);
        font-weight: 800;
        line-height: 1;
        min-height: 9px;
        overflow: hidden;
        position: relative;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        z-index: 1;
      }
      .led {
        border-radius: 999px;
        height: 8px;
        position: relative;
        width: 20px;
        z-index: 1;
      }
      .port.inactive .led {
        background: #657080;
      }
      .port.inactive {
        border-color: rgba(101, 112, 128, 0.72);
      }
      .port.active .led {
        background: #22c55e;
        box-shadow: 0 0 12px rgba(34, 197, 94, 0.72);
      }
      .port.active {
        border-color: rgba(34, 197, 94, 0.82);
      }
      .port.poe .led {
        background: #38bdf8;
        box-shadow: 0 0 12px rgba(56, 189, 248, 0.78);
      }
      .port.poe {
        border-color: rgba(56, 189, 248, 0.9);
      }
      .port.unavailable {
        border-color: rgba(55, 65, 81, 0.72);
        opacity: 0.46;
      }
      .port-tooltip {
        background: rgba(8, 10, 18, 0.98);
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 8px;
        bottom: calc(100% + 8px);
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
        display: none;
        font-size: 12px;
        left: 50%;
        max-width: 260px;
        min-width: 190px;
        padding: 10px;
        pointer-events: none;
        position: absolute;
        text-align: left;
        transform: translateX(-50%);
        white-space: normal;
        z-index: 4;
      }
      .tooltip-left .port-tooltip {
        left: 0;
        transform: none;
      }
      .tooltip-right .port-tooltip {
        left: auto;
        right: 0;
        transform: none;
      }
      .tooltip-center .port-tooltip {
        left: 50%;
        transform: translateX(-50%);
      }
      .port:hover .port-tooltip {
        display: grid;
        gap: 6px;
      }
      .port-tooltip span {
        display: grid;
        gap: 2px;
      }
      .port-tooltip b {
        color: rgba(255, 255, 255, 0.58);
        font-size: 11px;
      }
      .details {
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 14px;
      }
      .details-head {
        align-items: flex-start;
        display: flex;
        gap: 12px;
        justify-content: space-between;
        margin-bottom: 12px;
      }
      .ghost {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 6px;
        color: rgba(255, 255, 255, 0.9);
        cursor: pointer;
        font: inherit;
        min-height: 32px;
        padding: 0 12px;
      }
      .port-picker {
        margin-top: 4px;
        max-width: min(260px, 100%);
        position: relative;
      }
      .port-picker-toggle {
        align-items: center;
        background: rgba(0, 0, 0, 0.18);
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 6px;
        color: rgba(255, 255, 255, 0.94);
        cursor: pointer;
        display: grid;
        font: inherit;
        font-size: 18px;
        font-weight: 700;
        gap: 10px;
        grid-template-columns: minmax(0, 1fr) 20px;
        min-height: 34px;
        min-width: min(220px, 100%);
        padding: 4px 8px;
        text-align: left;
        width: 100%;
      }
      .port-picker-toggle span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .port-picker-menu {
        background: rgba(12, 14, 24, 0.98);
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 6px;
        box-shadow: 0 14px 30px rgba(0, 0, 0, 0.38);
        display: grid;
        left: 0;
        max-height: 280px;
        min-width: 100%;
        overflow: auto;
        padding: 4px;
        position: absolute;
        top: calc(100% + 4px);
        z-index: 10;
      }
      .port-picker-option {
        background: transparent;
        border: 0;
        border-radius: 4px;
        color: rgba(255, 255, 255, 0.9);
        cursor: pointer;
        font: inherit;
        min-height: 30px;
        padding: 4px 8px;
        text-align: left;
      }
      .port-picker-option:hover,
      .port-picker-option.selected {
        background: rgba(255, 193, 7, 0.18);
      }
      .data-grid {
        display: grid;
        gap: 8px;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        margin-bottom: 12px;
      }
      .data-row {
        background: rgba(0, 0, 0, 0.16);
        border-radius: 6px;
        display: grid;
        gap: 3px;
        min-width: 0;
        padding: 9px;
      }
      .data-row span {
        color: rgba(255, 255, 255, 0.58);
        font-size: 12px;
      }
      .data-row strong {
        font-size: 13px;
        font-weight: 700;
        overflow-wrap: anywhere;
      }
      .controls {
        display: grid;
        gap: 8px;
        grid-template-columns: repeat(auto-fit, minmax(118px, 1fr));
      }
      .control {
        align-items: center;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.14);
        border-radius: 6px;
        color: rgba(255, 255, 255, 0.92);
        cursor: pointer;
        display: grid;
        font: inherit;
        gap: 4px;
        grid-template-columns: 20px 1fr auto;
        min-height: 42px;
        padding: 0 10px;
        text-align: left;
      }
      .control.is-on {
        border-color: rgba(34, 197, 94, 0.48);
      }
      .control:disabled {
        cursor: not-allowed;
        opacity: 0.45;
      }
      .control span,
      .control b {
        font-size: 13px;
      }
      .control b {
        color: rgba(255, 255, 255, 0.62);
      }
      @media (max-width: 640px) {
        .card {
          padding: 14px;
        }
        .header,
        .details-head {
          display: grid;
        }
        .ports {
          grid-template-columns: repeat(var(--columns), minmax(0, var(--port-size))) !important;
        }
        .status-chip.status-fans {
          grid-column: span 1;
        }
        .data-grid {
          grid-template-columns: 1fr;
        }
      }
    `;
  }
}

customElements.define("netgear-proav-switch-card", NetgearProAvSwitchCard);

class NetgearProAvSwitchCardEditor extends HTMLElement {
  setConfig(config) {
    this.config = {
      columns: 12,
      min_port_width: 34,
      max_port_width: 72,
      show_switch_view: true,
      show_switch_info: true,
      show_switch_controls: true,
      show_port_details: true,
      show_port_controls: true,
      control_lock: true,
      control_admin: true,
      control_bounce: true,
      control_poe: true,
      control_poe_reset: true,
      control_pause_polling: true,
      control_full_poll: true,
      control_save_config: true,
      control_fan_mode: true,
      width: "100%",
      ...config,
    };
    this.render();
  }

  set hass(hass) {
    this._hass = hass;
    this.configureEntityPicker();
  }

  render() {
    if (!this.config) {
      return;
    }

    this.innerHTML = `
      <style>
        .editor {
          display: grid;
          gap: 12px;
          padding: 4px 0;
        }
        label {
          color: var(--primary-text-color);
          display: grid;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
        }
        input,
        textarea {
          background: var(--card-background-color);
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          box-sizing: border-box;
          color: var(--primary-text-color);
          font: inherit;
          min-height: 38px;
          padding: 8px 10px;
          width: 100%;
        }
        textarea {
          min-height: 118px;
          resize: vertical;
        }
        .row {
          display: grid;
          gap: 12px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .check {
          align-items: center;
          display: flex;
          gap: 10px;
          font-weight: 600;
        }
        .check input {
          min-height: auto;
          width: auto;
        }
        .hint {
          color: var(--secondary-text-color);
          font-size: 12px;
          line-height: 1.35;
        }
        .editor-section {
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          display: grid;
          gap: 8px;
          padding: 10px;
        }
        .editor-section h3 {
          color: var(--primary-text-color);
          font-size: 13px;
          margin: 0;
        }
      </style>
      <div class="editor">
        <label>
          Card title
          <input data-field="name" value="${this.escapeAttr(this.config.name || "")}" placeholder="NETGEAR Pro AV Switches">
        </label>
        <label>
          Add switch from entity
          <ha-entity-picker data-field="entity_picker" allow-custom-entity></ha-entity-picker>
          <span class="hint">Pick any NETGEAR link-state entity for the switch. The editor adds the owning switch name to the card.</span>
        </label>
        <label>
          Single switch name
          <input data-field="single_switch_name" value="${this.escapeAttr(this.config.switches?.length ? "" : this.config.name || "")}" placeholder="Core Switch">
        </label>
        <label>
          Card width
          <input data-field="width" value="${this.escapeAttr(this.config.width || "100%")}" placeholder="100%, 720px, 48rem">
        </label>
        <div class="row">
          <label>
            Minimum port width
            <input data-field="min_port_width" type="number" min="24" max="80" value="${this.escapeAttr(this.config.min_port_width || 34)}">
          </label>
          <label>
            Maximum port width
            <input data-field="max_port_width" type="number" min="36" max="120" value="${this.escapeAttr(this.config.max_port_width || 72)}">
          </label>
        </div>
        <label>
          Switches
          <textarea data-field="switches" placeholder="Core Switch">${this.escape(this.switchesText())}</textarea>
          <span class="hint">One switch per line: switch name. Add switches with the entity picker when possible.</span>
        </label>
        <div class="editor-section">
          <h3>Data</h3>
          ${this.checkbox("show_switch_view", "Show switch faceplate")}
          ${this.checkbox("show_switch_info", "Show switch info")}
          ${this.checkbox("show_port_details", "Show selected-port data")}
        </div>
        <div class="editor-section">
          <h3>Switch Controls</h3>
          ${this.checkbox("show_switch_controls", "Show switch controls")}
          ${this.checkbox("control_pause_polling", "Pause polling")}
          ${this.checkbox("control_full_poll", "Full poll")}
          ${this.checkbox("control_save_config", "Save config")}
          ${this.checkbox("control_fan_mode", "Fan mode")}
        </div>
        <div class="editor-section">
          <h3>Port Controls</h3>
          ${this.checkbox("show_port_controls", "Show port controls")}
          ${this.checkbox("control_lock", "Protection lock")}
          ${this.checkbox("control_admin", "Admin toggle")}
          ${this.checkbox("control_bounce", "Bounce button")}
          ${this.checkbox("control_poe", "PoE toggle")}
          ${this.checkbox("control_poe_reset", "PoE reset button")}
        </div>
      </div>
    `;

    this.querySelectorAll("input, textarea").forEach((input) => {
      input.addEventListener("change", () => this.valueChanged());
    });
    this.configureEntityPicker();
  }

  switchesText() {
    if (!Array.isArray(this.config.switches)) {
      return "";
    }
    return this.config.switches
      .map((item) => [item.name || "", item.device_id || "", item.columns || ""].join(" | ").trim())
      .map((line) => line.replace(/\s+\|\s+\|\s*$/, ""))
      .join("\n");
  }

  checkbox(field, label) {
    return `
      <label class="check">
        <input data-field="${this.escapeAttr(field)}" type="checkbox" ${this.config[field] !== false ? "checked" : ""}>
        ${this.escape(label)}
      </label>
    `;
  }

  configureEntityPicker() {
    const picker = this.querySelector('[data-field="entity_picker"]');
    if (!picker) {
      return;
    }
    picker.hass = this._hass;
    picker.includeDomains = ["binary_sensor"];
    picker.label = "Link-state entity";
    if (picker.dataset.bound === "true") {
      return;
    }
    picker.dataset.bound = "true";
    picker.addEventListener("value-changed", (event) => this.addSwitchFromEntity(event.detail?.value));
    picker.addEventListener("change", (event) => this.addSwitchFromEntity(event.target?.value));
  }

  addSwitchFromEntity(entityId) {
    if (!entityId || !this._hass?.states?.[entityId]) {
      return;
    }
    const switchName = this.switchNameFromEntity(entityId);
    if (!switchName) {
      return;
    }

    const textarea = this.querySelector('[data-field="switches"]');
    const line = switchName;
    const existing = (textarea.value || "").split("\n").map((item) => item.trim()).filter(Boolean);
    if (!existing.some((item) => item.split("|")[0].trim() === switchName)) {
      existing.push(line);
      textarea.value = existing.join("\n");
      this.valueChanged();
    }
    const picker = this.querySelector('[data-field="entity_picker"]');
    if (picker) {
      picker.value = "";
    }
  }

  switchNameFromEntity(entityId) {
    const entityInfo = this._hass.entities?.[entityId];
    const device = entityInfo?.device_id ? this._hass.devices?.[entityInfo.device_id] : null;
    if (device) {
      return device.name_by_user || device.name || device.model || null;
    }
    const friendly = this._hass.states[entityId]?.attributes?.friendly_name;
    return friendly ? friendly.replace(/ Link State .*/, "") : null;
  }

  valueChanged() {
    const nextConfig = { ...this.config };
    const fieldValue = (field) => this.querySelector(`[data-field="${field}"]`)?.value?.trim();
    const title = fieldValue("name");
    const singleSwitchName = fieldValue("single_switch_name");
    const width = fieldValue("width");
    const minPortWidth = Number.parseInt(fieldValue("min_port_width"), 10);
    const maxPortWidth = Number.parseInt(fieldValue("max_port_width"), 10);
    const switches = this.parseSwitches(fieldValue("switches") || "");
    const checkboxFields = [
      "show_switch_info",
      "show_switch_view",
      "show_switch_controls",
      "show_port_details",
      "show_port_controls",
      "control_lock",
      "control_admin",
      "control_bounce",
      "control_poe",
      "control_poe_reset",
      "control_pause_polling",
      "control_full_poll",
      "control_save_config",
      "control_fan_mode",
    ];

    if (title) {
      nextConfig.name = title;
    } else {
      delete nextConfig.name;
    }

    if (singleSwitchName) {
      nextConfig.name = singleSwitchName;
    }

    if (width) {
      nextConfig.width = width;
    } else {
      delete nextConfig.width;
    }

    if (Number.isFinite(minPortWidth)) {
      nextConfig.min_port_width = minPortWidth;
    } else {
      delete nextConfig.min_port_width;
    }

    if (Number.isFinite(maxPortWidth)) {
      nextConfig.max_port_width = maxPortWidth;
    } else {
      delete nextConfig.max_port_width;
    }

    if (switches.length) {
      nextConfig.switches = switches;
    } else {
      delete nextConfig.switches;
    }

    for (const field of checkboxFields) {
      nextConfig[field] = this.querySelector(`[data-field="${field}"]`)?.checked !== false;
    }
    this.config = nextConfig;
    this.dispatchEvent(new CustomEvent("config-changed", {
      bubbles: true,
      composed: true,
      detail: { config: nextConfig },
    }));
  }

  parseSwitches(value) {
    return value
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [name, deviceIdValue, columns] = line.split("|").map((part) => part.trim());
        const deviceId = deviceIdValue && this._hass?.devices?.[deviceIdValue] ? deviceIdValue : undefined;
        return {
          name,
          device_id: deviceId,
          columns: Number.parseInt(columns, 10) || undefined,
        };
      })
      .filter((item) => item.name || item.device_id);
  }

  cleanName(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/_/g, " ")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  escape(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  escapeAttr(value) {
    return this.escape(value).replace(/`/g, "&#096;");
  }
}

customElements.define("netgear-proav-switch-card-editor", NetgearProAvSwitchCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "netgear-proav-switch-card",
  name: "NETGEAR Pro AV Switch Card",
  description: "Visual switch faceplate and per-port controls for multiple NETGEAR Pro AV switches.",
  preview: true,
  documentationURL: "https://github.com/Hyperion5088/homeassistant-netgear-proav-switch-card",
});
