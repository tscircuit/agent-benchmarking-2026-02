import { sel } from "tscircuit"
import { HX_3x4x2_2P_1_6N_TACTILE_SWITCH } from "./imports/HX_3x4x2_2P_1_6N_TACTILE_SWITCH"
import { RP2040 } from "./imports/RP2040"
import { USB_TYPE_C_018 } from "./imports/USB_TYPE_C_018"
import { W25Q16JVSNIQ } from "./imports/W25Q16JVSNIQ"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"
import { XC6206P332MR_G } from "./imports/XC6206P332MR_G"

const leftHeaderLabels = {
  pin1: "GP0",
  pin2: "GP1",
  pin3: "GP2",
  pin4: "GP3",
  pin5: "GP4",
  pin6: "GP5",
  pin7: "GP6",
  pin8: "GP7",
  pin9: "GND",
  pin10: "3V3",
} as const

const rightHeaderLabels = {
  pin1: "GP16",
  pin2: "GP17",
  pin3: "GP18",
  pin4: "GP19",
  pin5: "GP20",
  pin6: "GP21",
  pin7: "GP25",
  pin8: "VBUS",
  pin9: "GND",
  pin10: "RUN",
} as const

export default () => (
  <board width="28mm" height="58mm" layers={4}>
    <USB_TYPE_C_018
      name="J1"
      pcbX={0}
      pcbY={25.2}
      pcbRotation="180deg"
      connections={{
        A1: sel.net.GND,
        A4: sel.net.VBUS,
        A5: sel.R1.pin2,
        A6: sel.R3.pin1,
        A7: sel.R4.pin1,
        A8: sel.net.GND,
        A9: sel.net.VBUS,
        A12: sel.net.GND,
        B1: sel.net.GND,
        B4: sel.net.VBUS,
        B5: sel.R2.pin2,
        B6: sel.R3.pin1,
        B7: sel.R4.pin1,
        B8: sel.net.GND,
        B9: sel.net.VBUS,
        B12: sel.net.GND,
        SH1: sel.net.GND,
        SH2: sel.net.GND,
        SH3: sel.net.GND,
      }}
    />

    <XC6206P332MR_G
      name="U2"
      pcbX={-6.3}
      pcbY={16.5}
      pcbRotation="90deg"
      connections={{
        Vin: sel.net.VBUS,
        Vout: sel.net.V3_3,
        GND: sel.net.GND,
      }}
    />

    <capacitor
      name="C1"
      capacitance="1uF"
      footprint="0603"
      pcbX={-9.4}
      pcbY={16.5}
      pcbRotation="90deg"
      connections={{
        pin1: sel.net.VBUS,
        pin2: sel.net.GND,
      }}
    />
    <capacitor
      name="C2"
      capacitance="1uF"
      footprint="0603"
      pcbX={-3.3}
      pcbY={16.5}
      pcbRotation="90deg"
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.net.GND,
      }}
    />

    <RP2040
      name="U1"
      pcbX={0}
      pcbY={3}
      pcbRotation="180deg"
      connections={{
        IOVDD1: sel.net.V3_3,
        IOVDD2: sel.net.V3_3,
        IOVDD3: sel.net.V3_3,
        IOVDD4: sel.net.V3_3,
        IOVDD5: sel.net.V3_3,
        IOVDD6: sel.net.V3_3,
        USB_VDD: sel.net.V3_3,
        ADC_AVDD: sel.net.V3_3,
        VREG_IN: sel.net.V3_3,
        DVDD1: sel.net.CORE_1V1,
        DVDD2: sel.net.CORE_1V1,
        VREG_VOUT: sel.net.CORE_1V1,
        TESTEN: sel.net.GND,
        GND: sel.net.GND,
      }}
    />

    <capacitor
      name="C3"
      capacitance="1uF"
      footprint="0402"
      pcbX={4.9}
      pcbY={7.5}
      pcbRotation="90deg"
      connections={{
        pin1: sel.U1.VREG_IN,
        pin2: sel.net.GND,
      }}
    />
    <capacitor
      name="C4"
      capacitance="1uF"
      footprint="0402"
      pcbX={2.4}
      pcbY={7.8}
      pcbRotation="90deg"
      connections={{
        pin1: sel.U1.VREG_VOUT,
        pin2: sel.net.GND,
      }}
    />
    <capacitor
      name="C5"
      capacitance="100nF"
      footprint="0402"
      pcbX={-4.8}
      pcbY={7.9}
      pcbRotation="90deg"
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.net.GND,
      }}
    />
    <capacitor
      name="C6"
      capacitance="100nF"
      footprint="0402"
      pcbX={-4.8}
      pcbY={-1.2}
      pcbRotation="90deg"
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.net.GND,
      }}
    />
    <capacitor
      name="C7"
      capacitance="100nF"
      footprint="0402"
      pcbX={4.8}
      pcbY={-1.2}
      pcbRotation="90deg"
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.net.GND,
      }}
    />

    <W25Q16JVSNIQ
      name="U3"
      pcbX={6.4}
      pcbY={14.2}
      pcbRotation="90deg"
      connections={{
        CS: sel.U1.QSPI_SS,
        pin2: sel.U1.QSPI_SD1,
        pin3: sel.U1.QSPI_SD2,
        GND: sel.net.GND,
        pin5: sel.U1.QSPI_SD0,
        CLK: sel.U1.QSPI_SCLK,
        pin7: sel.U1.QSPI_SD3,
        VCC: sel.net.V3_3,
      }}
    />

    <capacitor
      name="C8"
      capacitance="100nF"
      footprint="0402"
      pcbX={8.8}
      pcbY={9.4}
      pcbRotation="90deg"
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.net.GND,
      }}
    />

    <X322512MSB4SI
      name="Y1"
      pcbX={0}
      pcbY={-10.8}
      connections={{
        OSC1: sel.U1.XIN,
        OSC2: sel.R5.pin2,
        GND1: sel.net.GND,
        GND2: sel.net.GND,
      }}
    />
    <resistor
      name="R5"
      resistance="1k"
      footprint="0402"
      pcbX={-3.6}
      pcbY={-10.8}
      pcbRotation="90deg"
      connections={{
        pin1: sel.U1.XOUT,
      }}
    />
    <capacitor
      name="C9"
      capacitance="27pF"
      footprint="0402"
      pcbX={-2.2}
      pcbY={-14}
      pcbRotation="90deg"
      connections={{
        pin1: sel.U1.XIN,
        pin2: sel.net.GND,
      }}
    />
    <capacitor
      name="C10"
      capacitance="27pF"
      footprint="0402"
      pcbX={2.2}
      pcbY={-14}
      pcbRotation="90deg"
      connections={{
        pin1: sel.R5.pin2,
        pin2: sel.net.GND,
      }}
    />

    <resistor
      name="R1"
      resistance="5.1k"
      footprint="0402"
      pcbX={-2}
      pcbY={19.5}
      pcbRotation="90deg"
      connections={{
        pin1: sel.net.GND,
      }}
    />
    <resistor
      name="R2"
      resistance="5.1k"
      footprint="0402"
      pcbX={2}
      pcbY={19.5}
      pcbRotation="90deg"
      connections={{
        pin1: sel.net.GND,
      }}
    />
    <resistor
      name="R3"
      resistance="27ohm"
      footprint="0402"
      pcbX={2.1}
      pcbY={15.8}
      pcbRotation="90deg"
      connections={{
        pin2: sel.U1.USB_DP,
      }}
    />
    <resistor
      name="R4"
      resistance="27ohm"
      footprint="0402"
      pcbX={-2.1}
      pcbY={15.8}
      pcbRotation="90deg"
      connections={{
        pin2: sel.U1.USB_DM,
      }}
    />
    <resistor
      name="R6"
      resistance="10k"
      footprint="0402"
      pcbX={8.8}
      pcbY={18.2}
      pcbRotation="90deg"
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.U1.QSPI_SS,
      }}
    />
    <resistor
      name="R7"
      resistance="1k"
      footprint="0402"
      pcbX={3.5}
      pcbY={-18.8}
      pcbRotation="90deg"
      connections={{
        pin1: sel.U1.QSPI_SS,
      }}
    />
    <resistor
      name="R8"
      resistance="1k"
      footprint="0402"
      pcbX={6.8}
      pcbY={4.3}
      pcbRotation="90deg"
      connections={{
        pin1: sel.U1.GPIO25,
        pin2: sel.D1.pos,
      }}
    />

    <led
      name="D1"
      color="green"
      footprint="0603"
      pcbX={8.9}
      pcbY={4.3}
      pcbRotation="90deg"
      connections={{
        neg: sel.net.GND,
      }}
    />

    <HX_3x4x2_2P_1_6N_TACTILE_SWITCH
      name="SW1"
      pcbX={-3}
      pcbY={-24}
      pcbRotation="90deg"
      connections={{
        pin1: sel.U1.RUN,
        pin2: sel.net.GND,
      }}
    />
    <HX_3x4x2_2P_1_6N_TACTILE_SWITCH
      name="SW2"
      pcbX={3}
      pcbY={-24}
      pcbRotation="90deg"
      connections={{
        pin1: sel.R7.pin2,
        pin2: sel.net.GND,
      }}
    />

    <pinheader
      name="J2"
      pinCount={10}
      pcbX={-11.43}
      pcbY={0}
      pcbRotation="90deg"
      schFacingDirection="right"
      showSilkscreenPinLabels
      pcbPinLabels={leftHeaderLabels}
      connections={{
        pin1: sel.U1.GPIO0,
        pin2: sel.U1.GPIO1,
        pin3: sel.U1.GPIO2,
        pin4: sel.U1.GPIO3,
        pin5: sel.U1.GPIO4,
        pin6: sel.U1.GPIO5,
        pin7: sel.U1.GPIO6,
        pin8: sel.U1.GPIO7,
        pin9: sel.net.GND,
        pin10: sel.net.V3_3,
      }}
    />

    <pinheader
      name="J3"
      pinCount={10}
      pcbX={11.43}
      pcbY={0}
      pcbRotation="270deg"
      schFacingDirection="left"
      showSilkscreenPinLabels
      pcbPinLabels={rightHeaderLabels}
      connections={{
        pin1: sel.U1.GPIO16,
        pin2: sel.U1.GPIO17,
        pin3: sel.U1.GPIO18,
        pin4: sel.U1.GPIO19,
        pin5: sel.U1.GPIO20,
        pin6: sel.U1.GPIO21,
        pin7: sel.U1.GPIO25,
        pin8: sel.net.VBUS,
        pin9: sel.net.GND,
        pin10: sel.U1.RUN,
      }}
    />
  </board>
)
