import React from "react"
import { RP2040 } from "./imports/RP2040"
import { TYPE_C_31_M_12 } from "./imports/TYPE_C_31_M_12"
import { XL_1608UGC_06A } from "./imports/XL_1608UGC_06A"

export default function MinimalRp2040Breakout() {
  return (
    <board width="34mm" height="42mm" routingDisabled>
      <chip
        name="U2"
        footprint="pinrow_1x20_2.54mm"
        pinLabels={{
          pin1: "VBUS",
          pin2: "GND",
          pin3: "3V3",
          pin4: "GP0",
          pin5: "GP1",
          pin6: "GP2",
          pin7: "GP3",
          pin8: "GP4",
          pin9: "GP5",
          pin10: "GP6",
          pin11: "GP7",
          pin12: "GP8",
          pin13: "GP9",
          pin14: "GP10",
          pin15: "GP11",
          pin16: "GP12",
          pin17: "GP13",
          pin18: "GP14",
          pin19: "GP15",
          pin20: "SWCLK",
        }}
        pcbX={-13.97}
        pcbY={0}
        pcbRotation={90}
        schX={-16}
        schY={0}
      />

      <chip
        name="U3"
        footprint="pinrow_1x20_2.54mm"
        pinLabels={{
          pin1: "SWD",
          pin2: "RUN",
          pin3: "GP16",
          pin4: "GP17",
          pin5: "GP18",
          pin6: "GP19",
          pin7: "GP20",
          pin8: "GP21",
          pin9: "GP22",
          pin10: "GP23",
          pin11: "GP24",
          pin12: "GP25",
          pin13: "GP26",
          pin14: "GP27",
          pin15: "GP28",
          pin16: "GP29",
          pin17: "ADC_AVDD",
          pin18: "VREG_IN",
          pin19: "USB_DP",
          pin20: "USB_DM",
        }}
        pcbX={13.97}
        pcbY={0}
        pcbRotation={270}
        schX={16}
        schY={0}
      />

      <TYPE_C_31_M_12
        name="J1"
        pcbX={0}
        pcbY={17}
        pcbRotation={180}
        schX={0}
        schY={14}
      />

      <RP2040 name="U1" pcbX={0} pcbY={1.5} schX={0} schY={0} />

      <resistor
        name="R1"
        resistance="1k"
        footprint="0402"
        pcbX={8.5}
        pcbY={13}
        pcbRotation={90}
        schX={10}
        schY={8}
      />

      <XL_1608UGC_06A
        name="D1"
        pcbX={8.5}
        pcbY={9.5}
        pcbRotation={90}
        schX={10}
        schY={4}
      />

      <capacitor
        name="C1"
        capacitance="1uF"
        footprint="0402"
        pcbX={3.6}
        pcbY={9.2}
        schX={5}
        schY={6}
      />

      <capacitor
        name="C2"
        capacitance="1uF"
        footprint="0402"
        pcbX={0.8}
        pcbY={9.2}
        schX={1.5}
        schY={6}
      />

      <capacitor
        name="C3"
        capacitance="100nF"
        footprint="0402"
        pcbX={-2.1}
        pcbY={9.2}
        schX={-2}
        schY={6}
      />

      <capacitor
        name="C4"
        capacitance="100nF"
        footprint="0402"
        pcbX={-5}
        pcbY={9.2}
        schX={-5.5}
        schY={6}
      />

      <resistor
        name="R2"
        resistance="10k"
        footprint="0402"
        pcbX={-7.5}
        pcbY={4.5}
        pcbRotation={90}
        schX={-10}
        schY={2}
      />

      <trace from="J1.A1B12" to="net.GND" />
      <trace from="J1.B1A12" to="net.GND" />
      <trace from="J1.A4B9" to="net.VBUS" />
      <trace from="J1.B4A9" to="net.VBUS" />
      <trace from="J1.A6" to="U1.USB_DP" />
      <trace from="J1.B6" to="U1.USB_DP" />
      <trace from="J1.A7" to="U1.USB_DM" />
      <trace from="J1.B7" to="U1.USB_DM" />
      <trace from="J1.A5" to="net.GND" />
      <trace from="J1.B5" to="net.GND" />
      <trace from="J1.A8" to="net.GND" />
      <trace from="J1.B8" to="net.GND" />
      <trace from="J1.EH1" to="net.GND" />
      <trace from="J1.EH2" to="net.GND" />
      <trace from="J1.EH3" to="net.GND" />
      <trace from="J1.EH4" to="net.GND" />

      <trace from="U1.VREG_IN" to="net.VBUS" />
      <trace from="U1.USB_VDD" to="net.V3_3" />
      <trace from="U1.VREG_VOUT" to="net.V3_3" />
      <trace from="U1.ADC_AVDD" to="net.V3_3" />
      <trace from="U1.IOVDD1" to="net.V3_3" />
      <trace from="U1.IOVDD2" to="net.V3_3" />
      <trace from="U1.IOVDD3" to="net.V3_3" />
      <trace from="U1.IOVDD4" to="net.V3_3" />
      <trace from="U1.IOVDD5" to="net.V3_3" />
      <trace from="U1.IOVDD6" to="net.V3_3" />
      <trace from="U1.DVDD1" to="net.V3_3" />
      <trace from="U1.DVDD2" to="net.V3_3" />

      <trace from="C1.pin1" to="net.VBUS" />
      <trace from="C1.pin2" to="net.GND" />
      <trace from="C2.pin1" to="net.V3_3" />
      <trace from="C2.pin2" to="net.GND" />
      <trace from="C3.pin1" to="net.V3_3" />
      <trace from="C3.pin2" to="net.GND" />
      <trace from="C4.pin1" to="net.V3_3" />
      <trace from="C4.pin2" to="net.GND" />

      <trace from="R2.pin1" to="net.V3_3" />
      <trace from="R2.pin2" to="U1.RUN" />

      <trace from="U1.GPIO25" to="R1.pin1" />
      <trace from="R1.pin2" to="D1.A" />
      <trace from="D1.K" to="net.GND" />

      <trace from="U1.GPIO0" to="U2.GP0" />
      <trace from="U1.GPIO1" to="U2.GP1" />
      <trace from="U1.GPIO2" to="U2.GP2" />
      <trace from="U1.GPIO3" to="U2.GP3" />
      <trace from="U1.GPIO4" to="U2.GP4" />
      <trace from="U1.GPIO5" to="U2.GP5" />
      <trace from="U1.GPIO6" to="U2.GP6" />
      <trace from="U1.GPIO7" to="U2.GP7" />
      <trace from="U1.GPIO8" to="U2.GP8" />
      <trace from="U1.GPIO9" to="U2.GP9" />
      <trace from="U1.GPIO10" to="U2.GP10" />
      <trace from="U1.GPIO11" to="U2.GP11" />
      <trace from="U1.GPIO12" to="U2.GP12" />
      <trace from="U1.GPIO13" to="U2.GP13" />
      <trace from="U1.GPIO14" to="U2.GP14" />
      <trace from="U1.GPIO15" to="U2.GP15" />
      <trace from="U1.SWCLK" to="U2.SWCLK" />
      <trace from="U2.VBUS" to="net.VBUS" />
      <trace from="U2.GND" to="net.GND" />
      <trace from="U2.3V3" to="net.V3_3" />

      <trace from="U1.SWD" to="U3.SWD" />
      <trace from="U1.RUN" to="U3.RUN" />
      <trace from="U1.GPIO16" to="U3.GP16" />
      <trace from="U1.GPIO17" to="U3.GP17" />
      <trace from="U1.GPIO18" to="U3.GP18" />
      <trace from="U1.GPIO19" to="U3.GP19" />
      <trace from="U1.GPIO20" to="U3.GP20" />
      <trace from="U1.GPIO21" to="U3.GP21" />
      <trace from="U1.GPIO22" to="U3.GP22" />
      <trace from="U1.GPIO23" to="U3.GP23" />
      <trace from="U1.GPIO24" to="U3.GP24" />
      <trace from="U1.GPIO25" to="U3.GP25" />
      <trace from="U1.GPIO26_ADC0" to="U3.GP26" />
      <trace from="U1.GPIO27_ADC1" to="U3.GP27" />
      <trace from="U1.GPIO28_ADC2" to="U3.GP28" />
      <trace from="U1.GPIO29_ADC3" to="U3.GP29" />
      <trace from="U3.ADC_AVDD" to="net.V3_3" />
      <trace from="U3.VREG_IN" to="net.VBUS" />
      <trace from="U3.USB_DP" to="U1.USB_DP" />
      <trace from="U3.USB_DM" to="U1.USB_DM" />
    </board>
  )
}