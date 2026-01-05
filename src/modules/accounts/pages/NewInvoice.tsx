import { useState } from "react";
import { Plus, Upload, UserPlus, List } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/the-steel-logo.svg";

// Types
interface InvoiceItem {
  id: string;
  description: string;
  rate: number;
  markup: number;
  quantity: number;
  tax: boolean;
  notes: string;
  photos: string[]; // For now just storing names or URLs
}

export default function NewInvoice() {
  const navigate = useNavigate();
  const [invoiceNumber, setInvoiceNumber] = useState("2460");
  const [date, setDate] = useState("2025-10-25");
  const [daysToPay, setDaysToPay] = useState("15");
  const [poNumber, setPoNumber] = useState("");
  const [items, setItems] = useState<InvoiceItem[]>([
    {
      id: "1",
      description: "",
      rate: 75000.0,
      markup: 0,
      quantity: 1,
      tax: true,
      notes: "",
      photos: ["Image123.png"],
    },
    {
      id: "2",
      description: "",
      rate: 75000.0,
      markup: 0,
      quantity: 1,
      tax: true,
      notes: "",
      photos: [],
    },
  ]);

  const addNewItem = () => {
    setItems([
      ...items,
      {
        id: Date.now().toString(),
        description: "",
        rate: 0,
        markup: 0,
        quantity: 1,
        tax: false,
        notes: "",
        photos: [],
      },
    ]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const calculateTotal = (item: InvoiceItem) => {
    // Basic calculation logic
    return item.rate * item.quantity; // Add markup/tax logic if needed
  };

  const subtotal = items.reduce((acc, item) => acc + calculateTotal(item), 0);
  const taxAmount = subtotal * 0.1; // 10% tax example
  const total = subtotal + taxAmount;

  return (
    <div className="md:px-5 px-2 md:pt-5 pb-10 space-y-6 min-w-xs">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Invoice#{invoiceNumber}
        </h1>
        <div className="flex items-center gap-3 ml-auto">
          <Button
            variant="outline"
            className="bg-white hover:bg-gray-50 text-gray-700 border-gray-200"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button
            className="bg-[#2563EB] hover:bg-blue-700 text-white px-6"
            onClick={() => navigate("/payments/invoice/preview")}
          >
            Save
          </Button>
        </div>
      </header>

      <div className="bg-white rounded-md p-4 sm:p-8 lg:p-10 shadow-sm mx-auto max-w-7xl">
        {/* Top Section: Client Info & Invoice Details */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12">
          {/* Left: Organization Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center shrink-0">
                <img
                  src={logo}
                  alt="Logo"
                  className="md:w-29 w-20 md:h-16  object-contain"
                />
              </div>
            </div>

            <div className="text-sm text-gray-500 leading-relaxed max-w-[250px]">
              1851 Madison Ave Suite 300
              <br />
              Council Bluffs, IA
              <br />
              51503
              <br />
              United States
              <br />
              travis@storagematerials.com
              <br />
              www.storagematerials.com
            </div>
          </div>

          {/* Right: Invoice Meta & Client Add */}
          <div className="flex-1 max-w-2xl flex flex-col gap-6">
            <div className="flex justify-end">
              <Button
                variant="outline"
                className="border-blue-200 text-blue-600 hover:bg-blue-50 w-fit sm:w-auto h-12 px-8 flex items-center gap-2 rounded-md"
              >
                <UserPlus className="w-4 h-4" />
                ADD CLIENT
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Invoice #
                </label>
                <Input
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  className="bg-white border-gray-200 h-11"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Date
                </label>
                <Input
                  type="date"
                  className="bg-white border-gray-200 h-11"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Days to pay
                </label>
                <Input
                  value={daysToPay}
                  onChange={(e) => setDaysToPay(e.target.value)}
                  className="bg-white border-gray-200 h-11"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  PO number
                </label>
                <Input
                  placeholder="PO number"
                  className="bg-white border-gray-200 h-11"
                  value={poNumber}
                  onChange={(e) => setPoNumber(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section Headers */}
        <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50/50 py-3 px-4 rounded-lg mb-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
          <div className="col-span-5">Description</div>
          <div className="col-span-2 text-center">Rate</div>
          <div className="col-span-1 text-center">Markup</div>
          <div className="col-span-2 text-center">Quantity</div>
          <div className="col-span-1 text-center">Tax</div>
          <div className="col-span-1 text-right">Total</div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-5 bg-gray-200 rounded-full relative cursor-pointer">
              <div className="w-5 h-5 bg-white rounded-full shadow-sm absolute left-0 border border-gray-300"></div>
            </div>
            <span className="text-sm text-gray-500 font-medium">
              Group items into Sections
            </span>
          </div>
        </div>

        {/* Invoice Items List */}
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="relative group">
              <button
                onClick={() => removeItem(item.id)}
                className="absolute md:-left-8 left-0.5 top-4.5 text-red-500 hover:text-red-700  group-hover:opacity-100 transition-opacity"
                title="Remove item"
              >
                <div className="md:w-5 md:h-5 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white">
                  <span className="h-0.5 w-3 bg-white"></span>
                </div>
              </button>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Main Item Row */}
                <div className="grid grid-cols-2 xl:grid-cols-12 md:divide-x divide-gray-100 bg-white">
                  {/* Description & Item List - Full width on mobile */}
                  <div className="col-span-2 md:col-span-5 p-3 flex items-center gap-4 border-b md:border-b-0 border-gray-100">
                    <span className="text-gray-400 text-sm pl-2">
                      Description
                    </span>
                    <div className="ml-auto">
                      <button className="text-blue-500 flex items-center gap-1.5 text-xs font-semibold hover:bg-blue-50 px-3 py-1.5 rounded-md transition-colors">
                        <List className="w-4 h-4" />
                        Item list
                      </button>
                    </div>
                  </div>

                  {/* Rate */}
                  <div className="col-span-1 md:col-span-2 p-3 flex flex-col md:flex-row items-start md:items-center justify-center border-b md:border-b-0 border-r border-gray-100 md:border-r-0">
                    <span className="md:hidden text-gray-400 text-[10px] uppercase tracking-wide mb-1">
                      Rate
                    </span>
                    <span className="text-gray-600 text-sm font-medium">
                      $
                      {item.rate.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  {/* Markup */}
                  <div className="col-span-1 md:col-span-1 p-3 flex flex-col md:flex-row items-start md:items-center justify-center border-b md:border-b-0 border-gray-100">
                    <span className="md:hidden text-gray-400 text-[10px] uppercase tracking-wide mb-1">
                      Markup
                    </span>
                    <span className="text-gray-600 text-sm">Markup</span>
                  </div>

                  {/* Quantity */}
                  <div className="col-span-1 md:col-span-2 p-3 flex flex-col md:flex-row items-start md:items-center justify-center border-b md:border-b-0 border-r border-gray-100 md:border-r-0">
                    <span className="md:hidden text-gray-400 text-[10px] uppercase tracking-wide mb-1">
                      Quantity
                    </span>
                    <span className="text-gray-600 text-sm">
                      {item.quantity}
                    </span>
                  </div>

                  {/* Tax */}
                  <div className="col-span-1 md:col-span-1 p-3 flex flex-col md:flex-row items-start md:items-center justify-center border-b md:border-b-0 border-gray-100">
                    <span className="md:hidden text-gray-400 text-[10px] uppercase tracking-wide mb-1">
                      Tax
                    </span>
                    <span className="text-blue-500 text-xs font-bold cursor-pointer">
                      Tax
                    </span>
                  </div>

                  {/* Total - Full width on mobile/special align */}
                  <div className="col-span-2 md:col-span-1 p-3 flex items-center justify-between md:justify-end pr-6 bg-gray-50 md:bg-white">
                    <span className="md:hidden text-gray-400 text-sm font-medium">
                      Total:
                    </span>
                    <span className="text-gray-900 md:text-gray-600 text-base md:text-sm font-bold md:font-medium">
                      $
                      {calculateTotal(item).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>

                {/* Notes Row */}
                <div className="border-t border-gray-100 p-0">
                  <input
                    type="text"
                    placeholder="Notes"
                    className="w-full px-5 py-3 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:bg-gray-50/50 transition-colors"
                    value={item.notes}
                    onChange={() => {}}
                  />
                </div>

                {/* Upload Row */}
                <div className="border-t border-gray-100 p-3 bg-gray-50/10 flex items-center gap-4">
                  <input
                    type="file"
                    id={`file-upload-${item.id}`}
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        const file = e.target.files[0];
                        const fileUrl = URL.createObjectURL(file);
                        setItems(
                          items.map((i) =>
                            i.id === item.id
                              ? { ...i, photos: [...i.photos, fileUrl] }
                              : i
                          )
                        );
                      }
                    }}
                  />
                  <Button
                    variant="outline"
                    className="border-blue-300 text-blue-600 hover:bg-blue-50 h-9 rounded-full px-4 text-xs font-medium flex gap-2"
                    onClick={() =>
                      document.getElementById(`file-upload-${item.id}`)?.click()
                    }
                  >
                    <Upload className="w-3.5 h-3.5" />
                    Upload photos
                  </Button>
                  <span className="text-gray-400 text-xs">(Max 4)</span>

                  {item.photos.map((photo, i) => (
                    <span key={i} className="text-xs text-gray-500">
                      {photo}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Line Item Button */}
        <div className="mt-4">
          <Button
            variant="outline"
            onClick={addNewItem}
            className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 h-12 border-dashed flex items-center justify-center gap-2 font-medium"
          >
            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <Plus className="w-3.5 h-3.5" />
            </div>
            ADD LINE ITEM
          </Button>
        </div>

        {/* Footer Summary */}
        <div className="mt-12 flex justify-end">
          <div className="w-full max-w-sm space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="text-gray-900 font-medium">
                $
                {subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Markup</span>
              <button className="text-blue-500 text-xs font-medium hover:underline">
                Add
              </button>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Discount</span>
              <button className="text-blue-500 text-xs font-medium hover:underline">
                Add
              </button>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Request a deposit</span>
              <button className="text-blue-500 text-xs font-medium hover:underline">
                Add
              </button>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Payment Schedule</span>
              <button className="text-blue-500 text-xs font-medium hover:underline">
                Add
              </button>
            </div>
            <div className="flex justify-between text-sm pt-2 border-t border-gray-100">
              <span className="text-gray-500">Tax</span>
              <span className="text-gray-900">
                $
                {taxAmount.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <span className="xl:text-lg font-bold text-gray-600">
                Total(USD)
              </span>
              <span className="xl:text-xl font-bold text-gray-800">
                ${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
