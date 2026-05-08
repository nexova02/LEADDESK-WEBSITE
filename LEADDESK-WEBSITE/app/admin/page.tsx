import fs from "fs/promises";
import path from "path";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

const DATA_FILE = path.join(process.cwd(), "data", "enquiries.json");

export default async function AdminPage() {
  let enquiries = [];
  try {
    const fileContent = await fs.readFile(DATA_FILE, "utf-8");
    enquiries = JSON.parse(fileContent).reverse();
  } catch (error) {
    console.error("Error reading enquiries:", error);
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black text-white p-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">System Enquiries</h1>
              <p className="text-zinc-400 mt-2">Manage all incoming requests and demo bookings.</p>
            </div>
            <div className="text-sm font-bold bg-white/10 px-4 py-2 rounded-full border border-white/20">
              Total: {enquiries.length}
            </div>
          </div>
          
          <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-xl shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead className="bg-black/40 border-b border-white/10">
                <tr>
                  <th className="p-5 font-bold uppercase tracking-wider text-xs text-zinc-400">Date Received</th>
                  <th className="p-5 font-bold uppercase tracking-wider text-xs text-zinc-400">Request Type</th>
                  <th className="p-5 font-bold uppercase tracking-wider text-xs text-zinc-400">Email Address</th>
                  <th className="p-5 font-bold uppercase tracking-wider text-xs text-zinc-400">Additional Info</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-10 text-center text-zinc-500 font-medium">No requests found in the system.</td>
                  </tr>
                ) : (
                  enquiries.map((enq: any) => (
                    <tr key={enq.id} className="border-b border-white/5 hover:bg-white/5 transition duration-150">
                      <td className="p-5 text-sm text-zinc-300 font-medium whitespace-nowrap">
                        {new Date(enq.date).toLocaleString(undefined, {
                          dateStyle: 'medium',
                          timeStyle: 'short'
                        })}
                      </td>
                      <td className="p-5">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                          enq.type === 'Book Demo' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
                          enq.type === 'General Enquiry' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' : 
                          'bg-white/10 text-white border-white/20'
                        }`}>
                          {enq.type || "Trial"}
                        </span>
                      </td>
                      <td className="p-5 font-bold text-white">{enq.email}</td>
                      <td className="p-5 text-zinc-400 text-sm max-w-xs truncate">{enq.message || "—"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
