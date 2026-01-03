import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Calendar, Upload, X, Plus, UserPlus } from "lucide-react";
import UploadImageDialog from "@/components/upload-image-dialog";
import ItemListDialog from "@/components/item-list-dialog";
import AddMarkupDialog from "@/components/add-markup-dialog";
import AddDiscountDialog from "@/components/add-discount-dialog";
import AddDepositDialog from "@/components/add-deposit-dialog";
import PaymentScheduleDialog from "@/components/payment-schedule-dialog";
import TaxDialog from "@/components/tax-dialog";
import AddClientDialog from "@/components/add-client-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Field, FieldLabel, FieldContent } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import steelLogo from "@/assets/the-steel-logo-dark.svg";

interface LineItem {
  id: string;
  description: string;
  notes: string;
  rate: number;
  markup: string;
  quantity: number;
  tax: boolean;
  images: string[];
  items: string[];
}

interface InvoiceFormValues {
  invoiceNumber: string;
  date: string;
  daysToPay: string;
  poNumber: string;
  groupSections: boolean;
  lineItems: LineItem[];
  markupType: "%" | "$";
  markupValue: string;
  discountType: "%" | "$";
  discountValue: string;
  depositType: "%" | "$";
  depositValue: string;
  paymentScheduleType: "%" | "$";
  paymentSchedulePayments: { name: string; amount: string }[];
  clientId: string;
  clientName: string;
  clientAvatar: string;
  taxes: { name: string; rate: string }[];
  selectedTaxes: string[];
}

export default function InvoiceForm() {
  const { register, control, handleSubmit, watch, setValue, getValues } =
    useForm<InvoiceFormValues>({
      defaultValues: {
        invoiceNumber: "2460",
        date: "10-25-2025",
        daysToPay: "15",
        poNumber: "",
        groupSections: false,
        markupType: "%",
        markupValue: "",
        discountType: "%",
        discountValue: "",
        depositType: "%",
        depositValue: "",
        paymentScheduleType: "%",
        paymentSchedulePayments: [],
        clientId: "",
        clientName: "",
        clientAvatar: "",
        taxes: [{ name: "Argyle", rate: "8.25" }],
        selectedTaxes: [],
        lineItems: [
          {
            id: "1",
            description: "Building 1",
            notes: "",
            rate: 75000,
            markup: "Markup",
            quantity: 1,
            tax: true,
            images: ["Image123.png"],
            items: [],
          },
        ],
      },
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "lineItems",
    keyName: "fieldId",
  });

  const watchLineItems = watch("lineItems");
  const invoiceNumber = watch("invoiceNumber");
  const markupType = watch("markupType");
  const markupValue = watch("markupValue");
  const discountType = watch("discountType");
  const discountValue = watch("discountValue");
  const depositType = watch("depositType");
  const depositValue = watch("depositValue");
  const paymentScheduleType = watch("paymentScheduleType");
  const paymentSchedulePayments = watch("paymentSchedulePayments");
  const clientId = watch("clientId");
  const clientName = watch("clientName");
  const clientAvatar = watch("clientAvatar");
  const taxes = watch("taxes");
  const selectedTaxes = watch("selectedTaxes");

  const addLineItem = () => {
    append({
      id: Date.now().toString(),
      description: "",
      notes: "",
      rate: 0,
      markup: "Markup",
      quantity: 1,
      tax: false,
      images: [],
      items: [],
    });
  };

  const removeImage = (index: number, imageIndex: number) => {
    const items = getValues("lineItems") || [];
    const images = items[index]?.images || [];
    const newImages = images.filter((_, i) => i !== imageIndex);
    setValue(`lineItems.${index}.images`, newImages);
  };

  const calculateSubtotal = () => {
    const items = watchLineItems || [];
    return items.reduce(
      (sum, item) =>
        sum + (parseFloat(String(item.rate || 0)) || 0) * (item.quantity || 0),
      0
    );
  };

  const calculateTax = () => {
    const subtotal = calculateSubtotal();
    const selected = selectedTaxes || [];
    const available = taxes || [];
    if (selected.length === 0) {
      // fallback to previous default
      return subtotal * 0.1;
    }

    const totalRate = selected.reduce((sum, name) => {
      const t = available.find((a) => a.name === name);
      return sum + (t ? parseFloat(t.rate || "0") : 0);
    }, 0);

    return subtotal * (totalRate / 100);
  };

  const calculateTotal = () => calculateSubtotal() + calculateTax();

  const onSubmit = (data: InvoiceFormValues) => {
    console.log("submit", data);
  };

  return (
    <div className="">
      <div className="pr-5">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h1 className="text-2xl font-semibold">Invoice#{invoiceNumber}</h1>
          <div className="flex gap-3">
            <Button variant="outline">Cancel</Button>
            <Button
              onClick={handleSubmit(onSubmit)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Save
            </Button>
          </div>
        </div>

        <Card className="space-y-6 p-6 rounded">
          {/* Company + Client + Invoice Details (single header) */}
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-4">
              <div className="flex items-center">
                <img src={steelLogo} alt="The Steel" className="h-12 w-auto" />
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="font-semibold text-gray-900 text-base">
                  The Steel
                </div>
                <p>1851 Madison Ave Suite 300</p>
                <p>Council Bluffs, IA</p>
                <p>51503</p>
                <p>United States</p>
                <p className="text-blue-600">travis@storagematerials.com</p>
                <p className="text-blue-600">www.storagematerials.com</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-4 w-full max-w-md">
              <div className="w-full flex justify-end">
                <AddClientDialog
                  initialSelected={clientId || null}
                  onDone={(client) => {
                    if (!client) {
                      setValue("clientId", "");
                      setValue("clientName", "");
                      setValue("clientAvatar", "");
                      return;
                    }

                    setValue("clientId", client.id);
                    setValue("clientName", client.name);
                    setValue("clientAvatar", client.avatar || "");
                  }}
                >
                  {clientName ? (
                    <div className="flex items-center gap-3">
                      <img
                        src={clientAvatar}
                        alt={clientName}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="text-sm font-medium text-gray-900">
                        {clientName}
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setValue("clientId", "");
                          setValue("clientName", "");
                          setValue("clientAvatar", "");
                        }}
                        className="text-gray-500 hover:text-red-500 ml-2"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <Button
                      variant="outline"
                      className="border-primary text-primary rounded px-5 h-11"
                    >
                      <UserPlus className="w-4 h-4 mr-2" />
                      ADD CLIENT
                    </Button>
                  )}
                </AddClientDialog>
              </div>

              <div className="w-full grid grid-cols-2 gap-4">
                <div>
                  <Field>
                    <FieldLabel htmlFor="invoiceNumber">Invoice #</FieldLabel>
                    <FieldContent>
                      <Input
                        id="invoiceNumber"
                        {...register("invoiceNumber")}
                      />
                    </FieldContent>
                  </Field>
                </div>

                <div>
                  <Field>
                    <FieldLabel htmlFor="date">Date</FieldLabel>
                    <FieldContent>
                      <div className="relative">
                        <Input id="date" {...register("date")} />
                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      </div>
                    </FieldContent>
                  </Field>
                </div>

                <div>
                  <Field>
                    <FieldLabel htmlFor="daysToPay">Days to pay</FieldLabel>
                    <FieldContent>
                      <Input id="daysToPay" {...register("daysToPay")} />
                    </FieldContent>
                  </Field>
                </div>

                <div>
                  <Field>
                    <FieldLabel htmlFor="poNumber">PO number</FieldLabel>
                    <FieldContent>
                      <Input id="poNumber" {...register("poNumber")} />
                    </FieldContent>
                  </Field>
                </div>
              </div>
            </div>
          </div>

          {/* Line Items Table */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Field
                className="flex items-center gap-2"
                orientation="horizontal"
              >
                <FieldContent>
                  <Controller
                    control={control}
                    name="groupSections"
                    render={({ field }) => (
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                </FieldContent>
                <FieldLabel className="mb-0">
                  Group items into Sections
                </FieldLabel>
              </Field>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-500 uppercase bg-gray-50 rounded px-4 py-3 border">
              <div className="col-span-3">Description</div>
              <div className="col-span-2">Rate</div>
              <div className="col-span-2">Markup</div>
              <div className="col-span-2">Quantity</div>
              <div className="col-span-2">Tax</div>
              <div className="col-span-1">Total</div>
            </div>

            {/* Line Items */}
            {fields.map((field, index) => {
              const item = watchLineItems?.[index] || field;
              return (
                <div
                  key={field.fieldId || field.id}
                  className="relative border rounded-lg p-4 pl-10 space-y-3 overflow-visible"
                >
                  <button
                    onClick={() => remove(index)}
                    className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white shadow"
                    aria-label="remove-item"
                  >
                    −
                  </button>
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-3">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-700">
                          {item?.description ? (
                            <div className="truncate">{item.description}</div>
                          ) : (
                            <Input
                              {...register(
                                `lineItems.${index}.description` as const
                              )}
                              placeholder="Description"
                            />
                          )}
                        </div>

                        <ItemListDialog
                          initialItems={item?.items || []}
                          onChange={(items) =>
                            setValue(`lineItems.${index}.items`, items)
                          }
                        >
                          <button className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                            <span className="text-lg">☰</span> Item list
                          </button>
                        </ItemListDialog>
                      </div>

                      {(item?.items || []).length > 0 && (
                        <div className="mt-2 flex items-center gap-2 flex-wrap">
                          {(item.items || []).map((it, i) => (
                            <div
                              key={i}
                              className="bg-gray-100 px-3 py-1 rounded text-sm"
                            >
                              {it}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="col-span-2">
                      <Input
                        type="number"
                        {...register(`lineItems.${index}.rate` as const, {
                          valueAsNumber: true,
                        })}
                        placeholder="0.00"
                      />
                    </div>

                    <div className="col-span-2">
                      <Controller
                        control={control}
                        name={`lineItems.${index}.markup` as const}
                        defaultValue={field.markup}
                        render={({ field: selField }) => (
                          <Select
                            value={selField.value}
                            onValueChange={selField.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Markup">Markup</SelectItem>
                              <SelectItem value="Fixed">Fixed</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>

                    <div className="col-span-2">
                      <Input
                        type="number"
                        {...register(`lineItems.${index}.quantity` as const, {
                          valueAsNumber: true,
                        })}
                        min="1"
                      />
                    </div>

                    <div className="col-span-2">
                      <Controller
                        control={control}
                        name={`lineItems.${index}.tax` as const}
                        defaultValue={field.tax}
                        render={({ field: taxField }) => (
                          <button
                            type="button"
                            onClick={() => taxField.onChange(!taxField.value)}
                            className="text-blue-600 hover:underline"
                          >
                            Tax
                          </button>
                        )}
                      />
                    </div>

                    <div className="col-span-1 flex items-center justify-end">
                      <span className="font-medium">
                        ${" "}
                        {(
                          (item?.rate || 0) * (item?.quantity || 0)
                        ).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <Field>
                      <FieldLabel className="text-sm text-gray-600">
                        Notes
                      </FieldLabel>
                      <FieldContent>
                        <Textarea
                          {...register(`lineItems.${index}.notes` as const)}
                          placeholder="Add notes..."
                          className="resize-none"
                          rows={2}
                        />
                      </FieldContent>
                    </Field>
                  </div>

                  {/* Images */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <UploadImageDialog
                      onUpload={(files) => {
                        const names = files.map((f) => f.name);
                        const items = getValues("lineItems") || [];
                        const images = items[index]?.images || [];
                        // keep max 4
                        const combined = [...images, ...names].slice(0, 4);
                        setValue(`lineItems.${index}.images`, combined);
                      }}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload photos
                        <span className="ml-2 text-gray-400 text-xs">
                          (Max 4)
                        </span>
                      </Button>
                    </UploadImageDialog>
                    {(item?.images || []).map((image: string, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded"
                      >
                        <span className="text-sm">{image}</span>
                        <button
                          onClick={() => removeImage(index, idx)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Add Line Item Button */}
            <div className="pt-2">
              <Button
                variant="outline"
                className="w-full max-w-3xl mx-auto border-2 border-dashed text-blue-600 hover:bg-blue-50 py-4 rounded-lg flex items-center justify-center"
                onClick={addLineItem}
              >
                <Plus className="w-5 h-5 mr-2" />
                ADD LINE ITEM
              </Button>
            </div>
          </div>

          {/* Summary */}
          <div className="flex justify-end">
            <div className="w-96 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">
                  $
                  {calculateSubtotal().toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Markup</span>

                {markupValue ? (
                  <div className="flex items-center gap-3">
                    <span className="font-medium">
                      {markupValue}
                      {markupType}
                    </span>
                    <AddMarkupDialog
                      initialType={markupType}
                      initialValue={markupValue}
                      onDone={({ type, value }) => {
                        setValue("markupType", type);
                        setValue("markupValue", value);
                      }}
                    >
                      <button className="text-blue-600 hover:underline">
                        Edit
                      </button>
                    </AddMarkupDialog>
                    <button
                      onClick={() => setValue("markupValue", "")}
                      className="text-gray-500 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <AddMarkupDialog
                    initialType={markupType}
                    initialValue={markupValue}
                    onDone={({ type, value }) => {
                      setValue("markupType", type);
                      setValue("markupValue", value);
                    }}
                  >
                    <button className="text-blue-600 hover:underline">
                      Add
                    </button>
                  </AddMarkupDialog>
                )}
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Discount</span>

                {discountValue ? (
                  <div className="flex items-center gap-3">
                    <span className="font-medium">
                      {discountValue}
                      {discountType}
                    </span>
                    <AddDiscountDialog
                      initialType={discountType}
                      initialValue={discountValue}
                      onDone={({ type, value }) => {
                        setValue("discountType", type);
                        setValue("discountValue", value);
                      }}
                    >
                      <button className="text-blue-600 hover:underline">
                        Edit
                      </button>
                    </AddDiscountDialog>
                    <button
                      onClick={() => setValue("discountValue", "")}
                      className="text-gray-500 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <AddDiscountDialog
                    initialType={discountType}
                    initialValue={discountValue}
                    onDone={({ type, value }) => {
                      setValue("discountType", type);
                      setValue("discountValue", value);
                    }}
                  >
                    <button className="text-blue-600 hover:underline">
                      Add
                    </button>
                  </AddDiscountDialog>
                )}
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Request a deposit</span>

                {depositValue ? (
                  <div className="flex items-center gap-3">
                    <span className="font-medium">
                      {depositValue}
                      {depositType}
                    </span>
                    <AddDepositDialog
                      initialType={depositType}
                      initialValue={depositValue}
                      onDone={({ type, value }) => {
                        setValue("depositType", type);
                        setValue("depositValue", value);
                      }}
                    >
                      <button className="text-blue-600 hover:underline">
                        Edit
                      </button>
                    </AddDepositDialog>
                    <button
                      onClick={() => setValue("depositValue", "")}
                      className="text-gray-500 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <AddDepositDialog
                    initialType={depositType}
                    initialValue={depositValue}
                    onDone={({ type, value }) => {
                      setValue("depositType", type);
                      setValue("depositValue", value);
                    }}
                  >
                    <button className="text-blue-600 hover:underline">
                      Add
                    </button>
                  </AddDepositDialog>
                )}
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Payment Schedule</span>

                {((paymentSchedulePayments || [])?.length || 0) > 0 ? (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      {(paymentSchedulePayments || []).map(
                        (
                          p: {
                            name: string;
                            amount: string;
                          },
                          i: number
                        ) => (
                          <div
                            key={i}
                            className="bg-gray-100 px-3 py-1 rounded text-sm"
                          >
                            {p.name} {p.amount}
                          </div>
                        )
                      )}

                      <PaymentScheduleDialog
                        initialType={paymentScheduleType}
                        initialPayments={paymentSchedulePayments}
                        onDone={({ type, payments }) => {
                          setValue("paymentScheduleType", type);
                          setValue("paymentSchedulePayments", payments);
                        }}
                      >
                        <button className="text-blue-600 hover:underline">
                          Edit
                        </button>
                      </PaymentScheduleDialog>
                    </div>

                    <button
                      onClick={() => setValue("paymentSchedulePayments", [])}
                      className="text-gray-500 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <PaymentScheduleDialog
                    initialType={paymentScheduleType}
                    initialPayments={paymentSchedulePayments}
                    onDone={({ type, payments }) => {
                      setValue("paymentScheduleType", type);
                      setValue("paymentSchedulePayments", payments);
                    }}
                  >
                    <button className="text-blue-600 hover:underline">
                      Add
                    </button>
                  </PaymentScheduleDialog>
                )}
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax</span>

                <div className="flex items-center gap-3">
                  {(selectedTaxes || []).length > 0 ? (
                    <div className="flex items-center gap-2 flex-wrap">
                      {(selectedTaxes || []).map((n, i) => (
                        <div
                          key={i}
                          className="bg-gray-100 px-3 py-1 rounded text-sm"
                        >
                          {n}
                        </div>
                      ))}

                      <TaxDialog
                        availableTaxes={taxes}
                        initialSelected={selectedTaxes}
                        onDone={(selected, updatedTaxes) => {
                          setValue("selectedTaxes", selected);
                          setValue("taxes", updatedTaxes);
                        }}
                      >
                        <button className="text-blue-600 hover:underline">
                          Edit
                        </button>
                      </TaxDialog>
                    </div>
                  ) : (
                    <TaxDialog
                      availableTaxes={taxes}
                      initialSelected={selectedTaxes}
                      onDone={(selected, updatedTaxes) => {
                        setValue("selectedTaxes", selected);
                        setValue("taxes", updatedTaxes);
                      }}
                    >
                      <button className="text-blue-600 hover:underline">
                        Add
                      </button>
                    </TaxDialog>
                  )}

                  <span className="font-medium">
                    $
                    {calculateTax().toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>
              <div className="pt-3 border-t-2">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">Total(USD)</span>
                  <span className="text-lg font-semibold">
                    $
                    {calculateTotal().toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
