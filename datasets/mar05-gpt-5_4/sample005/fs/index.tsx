import React from "react"
import { useCapacitor, useChip, useResistor } from "@tscircuit/core"
import { RP2040Module } from "@tsci/seveibar.rp2040-module"

import { TYPE_C_16PIN_2MD_073_ } from "./imports/TYPE_C_16PIN_2MD_073_"
import { XL_1608SYGC_06 } from "./imports/XL_1608SYGC_06"
import { A_0603WAF1001T5E } from "./imports/A_0603WAF1001T5E"
import { A_2_54_1_20P__ } from "./imports/A_2_54_1_20P__"

const USB_C_FOOTPRINT = () => <TYPE_C_16PIN_2MD_073_ name="USB_C_FOOTPRINT" />
const HEADER_LEFT_FOOTPRINT = () => <A_2_54_1_20P__ name="HEADER_LEFT_FOOTPRINT" />
const HEADER_RIGHT_FOOTPRINT = () => <A_2_54_1_20P__ name="HEADER_RIGHT_FOOTPRINT" />
const LED_FOOTPRINT = () => <XL_1608SYGC_06 name="LED_FOOTPRINT" />
const RES_FOOTPRINT = () => <A_0603WAF1001T5E name="RES_FOOTPRINT" />

const useUsbC = useChip({
  pin1: ["GND1"],
  pin2: ["VBUS1"],
  pin3: ["SBU2"],
  pin4: ["CC1"],
  pin5: ["DN2"],
  pin6: ["DP1"],
  pin7: ["DN1"],
  pin8: ["DP2"],
  pin9: ["SBU1"],
  pin10: ["CC2"],
  pin11: ["VBUS2"],
  pin12: ["GND2"],
  pin13: ["SHELL1"],
  pin14: ["SHELL2"],
  pin15: ["pin13_alt1"],
  pin16: ["pin14_alt1"],
})

const useLedChip = useChip({
  pin1: ["K"],
  pin2: ["A"],
})

const useHeader = useChip({
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"],
  pin17: ["pin17"],
  pin18: ["pin18"],
  pin19: ["pin19"],
  pin20: ["pin20"],
})

const pinMapLeft = [
  "GP0",
  "GP1",
  "GND",
  "GP2",
  "GP3",
  "GP4",
  "GP5",
  "GND",
  "GP6",
  "GP7",
  "GP8",
  "GP9",
  "GND",
  "GP10",
  "GP11",
  "GP12",
  "GP13",
  "GND",
  "VBUS",
  "VSYS",
] as const

const pinMapRight = [
  "3V3_EN",
  "3V3",
  "ADC_VREF",
  "GP28",
  "AGND",
  "GP27",
  "GP26",
  "RUN",
  "GP22",
  "GND",
  "GP21",
  "GP20",
  "GP19",
  "GP18",
  "GND",
  "GP17",
  "GP16",
  "GP15",
  "GP14",
  "SWCLK",
] as const

export default function MinimalRp2040Breakout() {
  const UsbC = useUsbC("J1", {
    manufacturerPartNumber: "TYPE_C_16PIN_2MD_073_",
    supplierPartNumbers: { jlcpcb: ["C2765186"] },
    footprint: <USB_C_FOOTPRINT />,
  })

  const HeaderLeft = useHeader("J2", {
    manufacturerPartNumber: "2.54-1*20P",
    supplierPartNumbers: { jlcpcb: ["C50981"] },
    footprint: <HEADER_LEFT_FOOTPRINT />,
  })

  const HeaderRight = useHeader("J3", {
    manufacturerPartNumber: "2.54-1*20P",
    supplierPartNumbers: { jlcpcb: ["C50981"] },
    footprint: <HEADER_RIGHT_FOOTPRINT />,
  })

  const Led = useLedChip("D1", {
    manufacturerPartNumber: "XL-1608SYGC-06",
    supplierPartNumbers: { jlcpcb: ["C965805"] },
    footprint: <LED_FOOTPRINT />,
  })

  const LedResistor = useResistor("R1", {
    resistance: "1k",
    footprint: <RES_FOOTPRINT />,
    supplierPartNumbers: { jlcpcb: ["C21190"] },
    manufacturerPartNumber: "0603WAF1001T5E",
  })

  const VbusCap = useCapacitor("C1", {
    capacitance: "10uF",
    footprint: "0603",
  })

  const V3Cap = useCapacitor("C2", {
    capacitance: "10uF",
    footprint: "0603",
  })

  return (
    <board width="56mm" height="24mm" routingDisabled>
      <group name="Core" pcbX={0} pcbY={0} subcircuit routingDisabled>
        <RP2040Module name="U1" />
      </group>

      <group pcbX={0} pcbY={0}>
        <UsbC
          pcbX="0mm"
          pcbY="-8.8mm"
          pcbRotation="180deg"
          schX="-18"
          schY="-2"
          DP2=".J1 .DP1"
          DN2=".J1 .DN1"
        />
      </group>

      <group pcbX={0} pcbY={0}>
        <HeaderLeft
          pcbX="-22.86mm"
          pcbY="0mm"
          pcbRotation="90deg"
          schX="-34"
          schY="0"
        />
      </group>

      <group pcbX={0} pcbY={0}>
        <HeaderRight
          pcbX="22.86mm"
          pcbY="0mm"
          pcbRotation="90deg"
          schX="34"
          schY="0"
        />
      </group>

      <group pcbX={0} pcbY={0}>
        <Led
          pcbX="15mm"
          pcbY="8mm"
          pcbRotation="180deg"
          schX="18"
          schY="-10"
        />
      </group>

      <LedResistor
        pcbX="10.5mm"
        pcbY="8mm"
        pcbRotation="0deg"
        schX="14"
        schY="-10"
      />

      <VbusCap
        pos="net.VBUS"
        neg="net.GND"
        pcbX="-7mm"
        pcbY="-6mm"
        schX="-10"
        schY="-12"
      />

      <V3Cap
        pos="net.V3_3"
        neg="net.GND"
        pcbX="7mm"
        pcbY="-6mm"
        schX="-6"
        schY="-12"
      />

      <trace from=".J1 > .VBUS1" to="net.VBUS" />
      <trace from=".J1 > .VBUS2" to="net.VBUS" />
      <trace from=".J1 > .GND1" to="net.GND" />
      <trace from=".J1 > .GND2" to="net.GND" />
      <trace from=".J1 > .SHELL1" to="net.GND" />
      <trace from=".J1 > .SHELL2" to="net.GND" />
      <trace from=".J1 > .DP1" to=".Core .USBDP" />
      <trace from=".J1 > .DN1" to=".Core .USBDM" />

      <trace from=".Core .GPIO25" to=".R1 > .pin1" />
      <trace from=".R1 > .pin2" to=".D1 > .A" />
      <trace from=".D1 > .K" to="net.GND" />

      <trace from=".Core .GPIO0" to=".J2 > .pin1" />
      <trace from=".Core .GPIO1" to=".J2 > .pin2" />
      <trace from="net.GND" to=".J2 > .pin3" />
      <trace from=".Core .GPIO2" to=".J2 > .pin4" />
      <trace from=".Core .GPIO3" to=".J2 > .pin5" />
      <trace from=".Core .GPIO4" to=".J2 > .pin6" />
      <trace from=".Core .GPIO5" to=".J2 > .pin7" />
      <trace from="net.GND" to=".J2 > .pin8" />
      <trace from=".Core .GPIO6" to=".J2 > .pin9" />
      <trace from=".Core .GPIO7" to=".J2 > .pin10" />
      <trace from=".Core .GPIO8" to=".J2 > .pin11" />
      <trace from=".Core .GPIO9" to=".J2 > .pin12" />
      <trace from="net.GND" to=".J2 > .pin13" />
      <trace from=".Core .GPIO10" to=".J2 > .pin14" />
      <trace from=".Core .GPIO11" to=".J2 > .pin15" />
      <trace from=".Core .GPIO12" to=".J2 > .pin16" />
      <trace from=".Core .GPIO13" to=".J2 > .pin17" />
      <trace from="net.GND" to=".J2 > .pin18" />
      <trace from="net.VBUS" to=".J2 > .pin19" />
      <trace from=".Core .VIN" to=".J2 > .pin20" />

      <trace from=".Core .IOVDD1" to=".J3 > .pin1" />
      <trace from="net.V3_3" to=".J3 > .pin2" />
      <trace from=".Core .ADC_IOVDD" to=".J3 > .pin3" />
      <trace from=".Core .GPIO28" to=".J3 > .pin4" />
      <trace from="net.GND" to=".J3 > .pin5" />
      <trace from=".Core .GPIO27" to=".J3 > .pin6" />
      <trace from=".Core .GPIO26" to=".J3 > .pin7" />
      <trace from=".Core .RUN" to=".J3 > .pin8" />
      <trace from=".Core .GPIO22" to=".J3 > .pin9" />
      <trace from="net.GND" to=".J3 > .pin10" />
      <trace from=".Core .GPIO21" to=".J3 > .pin11" />
      <trace from=".Core .GPIO20" to=".J3 > .pin12" />
      <trace from=".Core .GPIO19" to=".J3 > .pin13" />
      <trace from=".Core .GPIO18" to=".J3 > .pin14" />
      <trace from="net.GND" to=".J3 > .pin15" />
      <trace from=".Core .GPIO17" to=".J3 > .pin16" />
      <trace from=".Core .GPIO16" to=".J3 > .pin17" />
      <trace from=".Core .GPIO15" to=".J3 > .pin18" />
      <trace from=".Core .GPIO14" to=".J3 > .pin19" />
      <trace from=".Core .SWCLK" to=".J3 > .pin20" />

      {pinMapLeft.map((label, index) => (
        <pcbnotetext
          text={label}
          pcbX="-27.5mm"
          pcbY={`${-12 + index * 1.27}mm`}
          pcbRotation="0deg"
          fontSize="0.8mm"
        />
      ))}

      {pinMapRight.map((label, index) => (
        <pcbnotetext
          text={label}
          pcbX="27.5mm"
          pcbY={`${-12 + index * 1.27}mm`}
          pcbRotation="0deg"
          fontSize="0.8mm"
        />
      ))}
    </board>
  )
}