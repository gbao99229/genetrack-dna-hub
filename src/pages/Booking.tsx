
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BookingForm } from "../components/BookingForm";

const Booking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navigation />
      <div className="container mx-auto py-12">
        <BookingForm />
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
