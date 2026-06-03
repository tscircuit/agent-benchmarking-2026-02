import { AMS1117_3_3 } from "./imports/AMS1117_3_3"
import { RP2040 } from "./imports/RP2040"
import { W25Q16JVSSIQ } from "./imports/W25Q16JVSSIQ"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"
import { XL_1608SYGC_06 } from "./imports/XL_1608SYGC_06"

const decouplers = [
  ["C1", -5.9, 4.8],
  ["C2", -6.1, 2.6],
  ["C3", -6.1, 0.8],
  ["C4", -6.1, -1.0],
  ["C5", -6.1, -2.3],
  ["C6", 6.1, 4.8],
  ["C7", 6.1, 2.6],
  ["C8", 6.1, 0.8],
] as const

const coreDecouplers = [
  ["C9", 1.5, -5.7],
  ["C10", 3.4, -5.7],
] as const

const leftHeaderPins = [
  "GP0",
  "GP1",
  "GP2",
  "GP3",
  "GP4",
  "GP5",
  "GP6",
  "GP7",
  "GP8",
  "GP9",
  "GP10",
  "GP11",
  "GP12",
  "GP13",
  "GP14",
  "GP15",
  "3V3",
  "GND",
  "VBUS",
  "GND",
] as const

const rightHeaderPins = [
  "GP16",
  "GP17",
  "GP18",
  "GP19",
  "GP20",
  "GP21",
  "GP22",
  "GP23",
  "GP24",
  "GP25_LED",
  "GP26_ADC0",
  "GP27_ADC1",
  "GP28_ADC2",
  "GP29_ADC3",
  "RUN",
  "SWCLK",
  "SWD",
  "3V3",
  "GND",
  "GND",
] as const

export default () => (
  <board width="50mm" height="60mm" layers={2}>
    <RP2040 name="U1" pcbX={0} pcbY={0} schX={0} schY={0} />
    <W25Q16JVSSIQ name="U2" pcbX={0} pcbY={11.0} pcbRotation={180} schX={6} schY={-1} />
    <AMS1117_3_3 name="U3" pcbX={15.5} pcbY={7.0} pcbRotation={180} schX={-7} schY={4} />
    <X322512MSB4SI name="Y1" pcbX={-8.4} pcbY={-5.0} schX={-6} schY={-4} />

    <connector name="JUSB" standard="usb_c" pcbX={0} pcbY={-26.0} schX={-10} schY={2} />

    <pinheader
      name="J1"
      pinCount={20}
      gender="female"
      pitch="2.54mm"
      pinLabels={[...leftHeaderPins]}
      showSilkscreenPinLabels
      pcbX={-22}
      pcbY={0}
      pcbRotation={90}
      schX={-10}
      schY={-3}
    />
    <pinheader
      name="J2"
      pinCount={20}
      gender="female"
      pitch="2.54mm"
      pinLabels={[...rightHeaderPins]}
      showSilkscreenPinLabels
      pcbX={22}
      pcbY={0}
      pcbRotation={90}
      schX={10}
      schY={-3}
    />

    <XL_1608SYGC_06 name="D1" pcbX={12.2} pcbY={-8.4} pcbRotation={180} schX={7} schY={4} />
    <resistor
      name="RLED"
      resistance="330"
      footprint="0603"
      pcbX={8.7}
      pcbY={-8.4}
      schX={5}
      schY={4}
      supplierPartNumbers={{ jlcpcb: ["C23138"] }}
    />

    <resistor name="RCC1" resistance="5.1k" footprint="0603" pcbX={-6.0} pcbY={-20.8} schX={-11.5} schY={4.2} supplierPartNumbers={{ jlcpcb: ["C23186"] }} />
    <resistor name="RCC2" resistance="5.1k" footprint="0603" pcbX={6.0} pcbY={-20.8} schX={-10} schY={4.6} supplierPartNumbers={{ jlcpcb: ["C23186"] }} />
    <resistor name="RUSBP" resistance="27" footprint="0603" pcbX={2.0} pcbY={-18.6} schX={-6.5} schY={2.6} supplierPartNumbers={{ jlcpcb: ["C23345"] }} />
    <resistor name="RUSBM" resistance="27" footprint="0603" pcbX={5.2} pcbY={-18.6} schX={-6.5} schY={1.8} supplierPartNumbers={{ jlcpcb: ["C23345"] }} />
    <resistor name="RRUN" resistance="10k" footprint="0603" pcbX={5.6} pcbY={-3.2} schX={5.2} schY={-4.8} supplierPartNumbers={{ jlcpcb: ["C25804"] }} />

    <capacitor name="CIN" capacitance="10uF" footprint="0603" pcbX={17.0} pcbY={12.6} schX={-8.5} schY={5.3} supplierPartNumbers={{ jlcpcb: ["C19702"] }} />
    <capacitor name="COUT" capacitance="10uF" footprint="0603" pcbX={11.0} pcbY={12.6} schX={-5.5} schY={5.3} supplierPartNumbers={{ jlcpcb: ["C19702"] }} />
    <capacitor name="CUSB" capacitance="1uF" footprint="0603" pcbX={6.3} pcbY={7.2} schX={3.2} schY={3.8} supplierPartNumbers={{ jlcpcb: ["C15849"] }} />
    {decouplers.map(([name, x, y], index) => (
      <capacitor key={name} name={name} capacitance="100nF" footprint="0402" pcbX={x} pcbY={y} schX={2.5 + (index % 4) * 1.4} schY={2.2 - Math.floor(index / 4) * 1.2} supplierPartNumbers={{ jlcpcb: ["C1525"] }} />
    ))}
    {coreDecouplers.map(([name, x, y], index) => (
      <capacitor key={name} name={name} capacitance="1uF" footprint="0402" pcbX={x} pcbY={y} schX={2.5 + index * 1.4} schY={-3.9} supplierPartNumbers={{ jlcpcb: ["C52923"] }} />
    ))}
    <capacitor name="C11" capacitance="18pF" footprint="0402" pcbX={-11.4} pcbY={-8.0} schX={-7.8} schY={-5.1} supplierPartNumbers={{ jlcpcb: ["C1549"] }} />
    <capacitor name="C12" capacitance="18pF" footprint="0402" pcbX={-5.4} pcbY={-8.0} schX={-4.4} schY={-5.1} supplierPartNumbers={{ jlcpcb: ["C1549"] }} />
    <capacitor name="C13" capacitance="100nF" footprint="0402" pcbX={5.2} pcbY={13.2} schX={7.8} schY={0.3} supplierPartNumbers={{ jlcpcb: ["C1525"] }} />

    <testpoint name="TP_RUN" footprintVariant="pad" padShape="circle" padDiameter="1.1mm" pcbX={8.2} pcbY={-3.2} schX={6.2} schY={-4.5} />
    <testpoint name="TP_BOOT" footprintVariant="pad" padShape="circle" padDiameter="1.1mm" pcbX={-8.6} pcbY={8.9} schX={7.8} schY={-1.8} />
    <testpoint name="TP_SWCLK" footprintVariant="pad" padShape="circle" padDiameter="1.1mm" pcbX={8.7} pcbY={-1.5} schX={7.0} schY={-4.0} />
    <testpoint name="TP_SWD" footprintVariant="pad" padShape="circle" padDiameter="1.1mm" pcbX={8.7} pcbY={0.2} schX={7.0} schY={-3.5} />
    <testpoint name="TP_GND" footprintVariant="pad" padShape="circle" padDiameter="1.3mm" pcbX={8.7} pcbY={1.9} schX={7.0} schY={-3.0} />

    <trace from="JUSB.VBUS1" to="net.VBUS" />
    <trace from="JUSB.VBUS2" to="net.VBUS" />
    <trace from="JUSB.GND1" to="net.GND" />
    <trace from="JUSB.GND2" to="net.GND" />
    <trace from="JUSB.CC1" to="RCC1.pin1" />
    <trace from="JUSB.CC2" to="RCC2.pin1" />
    <trace from="RCC1.pin2" to="net.GND" />
    <trace from="RCC2.pin2" to="net.GND" />
    <trace from="JUSB.DP1" to="RUSBP.pin1" width="0.18mm" />
    <trace from="JUSB.DP2" to="RUSBP.pin1" width="0.18mm" />
    <trace from="RUSBP.pin2" to="U1.USB_DP" width="0.18mm" />
    <trace from="JUSB.DM1" to="RUSBM.pin1" width="0.18mm" />
    <trace from="JUSB.DM2" to="RUSBM.pin1" width="0.18mm" />
    <trace from="RUSBM.pin2" to="U1.USB_DM" width="0.18mm" />

    <trace from="U3.VIN" to="net.VBUS" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="U3.VOUT1" to="net.V3_3" />
    <trace from="U3.VOUT2" to="net.V3_3" />
    <trace from="CIN.pin1" to="net.VBUS" />
    <trace from="CIN.pin2" to="net.GND" />
    <trace from="COUT.pin1" to="net.V3_3" />
    <trace from="COUT.pin2" to="net.GND" />

    <trace from="U1.IOVDD1" to="net.V3_3" />
    <trace from="U1.IOVDD2" to="net.V3_3" />
    <trace from="U1.IOVDD3" to="net.V3_3" />
    <trace from="U1.IOVDD4" to="net.V3_3" />
    <trace from="U1.IOVDD5" to="net.V3_3" />
    <trace from="U1.IOVDD6" to="net.V3_3" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.VREG_IN" to="net.V3_3" />
    <trace from="U1.VREG_VOUT" to="net.V1_1" />
    <trace from="U1.DVDD1" to="net.V1_1" />
    <trace from="U1.DVDD2" to="net.V1_1" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.TESTEN" to="net.GND" />
    <trace from="CUSB.pin1" to="U1.USB_VDD" />
    <trace from="CUSB.pin2" to="net.GND" />
    {decouplers.map(([name]) => (
      <>
        <trace key={`${name}-vcc`} from={`${name}.pin1`} to="net.V3_3" />
        <trace key={`${name}-gnd`} from={`${name}.pin2`} to="net.GND" />
      </>
    ))}
    {coreDecouplers.map(([name]) => (
      <>
        <trace key={`${name}-vcc`} from={`${name}.pin1`} to="net.V1_1" />
        <trace key={`${name}-gnd`} from={`${name}.pin2`} to="net.GND" />
      </>
    ))}

    <trace from="Y1.OSC1" to="U1.XIN" width="0.18mm" />
    <trace from="Y1.OSC2" to="U1.XOUT" width="0.18mm" />
    <trace from="Y1.GND1" to="net.GND" />
    <trace from="Y1.GND2" to="net.GND" />
    <trace from="C11.pin1" to="Y1.OSC1" />
    <trace from="C11.pin2" to="net.GND" />
    <trace from="C12.pin1" to="Y1.OSC2" />
    <trace from="C12.pin2" to="net.GND" />

    <trace from="U2.VCC" to="net.V3_3" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="C13.pin1" to="U2.VCC" />
    <trace from="C13.pin2" to="net.GND" />
    <trace from="U2.pin1" to="U1.QSPI_SS" width="0.18mm" />
    <trace from="U2.pin5" to="U1.QSPI_SD0" width="0.18mm" />
    <trace from="U2.pin2" to="U1.QSPI_SD1" width="0.18mm" />
    <trace from="U2.IO2" to="U1.QSPI_SD2" width="0.18mm" />
    <trace from="U2.IO3" to="U1.QSPI_SD3" width="0.18mm" />
    <trace from="U2.CLK" to="U1.QSPI_SCLK" width="0.18mm" />
    <trace from="TP_BOOT.pin1" to="U1.QSPI_SS" />

    <trace from="RRUN.pin1" to="net.V3_3" />
    <trace from="RRUN.pin2" to="U1.RUN" />
    <trace from="TP_RUN.pin1" to="U1.RUN" />
    <trace from="TP_SWCLK.pin1" to="U1.SWCLK" />
    <trace from="TP_SWD.pin1" to="U1.SWD" />
    <trace from="TP_GND.pin1" to="net.GND" />

    <trace from="U1.GPIO25" to="RLED.pin1" />
    <trace from="RLED.pin2" to="D1.pin1" />
    <trace from="D1.pin2" to="net.GND" />

    {leftHeaderPins.map((label, index) => (
      <trace key={`j1-${index}-${label}`} from={`J1.pin${index + 1}`} to={label === "3V3" ? "net.V3_3" : label === "GND" ? "net.GND" : label === "VBUS" ? "net.VBUS" : `U1.GPIO${label.slice(2)}`} />
    ))}
    {rightHeaderPins.map((label, index) => (
      <trace
        key={`j2-${index}-${label}`}
        from={`J2.pin${index + 1}`}
        to={
          label === "3V3"
            ? "net.V3_3"
            : label === "GND"
              ? "net.GND"
              : label === "RUN"
                ? "U1.RUN"
                : label === "SWCLK"
                  ? "U1.SWCLK"
                  : label === "SWD"
                    ? "U1.SWD"
                    : label === "GP25_LED"
                      ? "U1.GPIO25"
                      : label.startsWith("GP") && label.includes("_ADC")
                        ? `U1.GPIO${label.slice(2, 4)}_${label.split("_")[1]}`
                        : `U1.GPIO${label.slice(2)}`
        }
      />
    ))}

    <silkscreentext text="RP2040 BREAKOUT" pcbX={0} pcbY={28.0} fontSize="1.1mm" anchorAlignment="center" />
    <silkscreentext text="USB-C" pcbX={-7.0} pcbY={-26.5} fontSize="0.8mm" anchorAlignment="center" />
  </board>
)
