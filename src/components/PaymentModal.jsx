import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeCanvas } from 'qrcode.react';
import Confetti from 'react-confetti';
import { X, CreditCard, QrCode, Smartphone, CheckCircle, Loader2, Coffee } from 'lucide-react';
import { profileData } from '../constants/portfolioData';

const AMOUNTS = [20, 50, 70, 100, 200];
const UPI_ID = '7478539007@upi';
const PAYEE_NAME = 'Subrata Bag';

export default function PaymentModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState(50);
  const [method, setMethod] = useState('upi'); // 'upi' or 'card'
  const [step, setStep] = useState('select'); // 'select', 'verifying', 'success'
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const upiIntentUrl = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(PAYEE_NAME)}&am=${amount}&cu=INR`;

  const handleSimulatePayment = () => {
    setStep('verifying');
    
    // Simulate secure network verification
    setTimeout(async () => {
      setStep('success');
      setShowConfetti(true);

      // Send Email Notification silently
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || profileData.contact.web3formsAccessKey;
      if (accessKey && accessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
        try {
          await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
              access_key: accessKey,
              subject: `🎉 New Coffee Payment Received! (₹${amount})`,
              from_name: 'Portfolio Payment Bot',
              message: `Woohoo! Someone just sent you ₹${amount} via ${method.toUpperCase()} on your portfolio.\n\nSimulated/Verified successfully.`,
            }),
          });
        } catch (e) {
          console.error('Silent email notification failed', e);
        }
      }

      // Stop confetti after 5 seconds
      setTimeout(() => setShowConfetti(false), 5000);
    }, 4000);
  };

  const handleClose = () => {
    setStep('select');
    setShowConfetti(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={step === 'verifying' ? undefined : handleClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {showConfetti && (
          <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={500} />
        )}

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800"
        >
          {/* Close Button */}
          {step !== 'verifying' && (
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          <div className="p-6 sm:p-8">
            {step === 'select' && (
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="mx-auto w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full flex items-center justify-center mb-4">
                    <Coffee className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Buy me a Coffee</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Support my work and help me build more awesome things!
                  </p>
                </div>

                {/* Amount Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Select Amount (INR)</label>
                  <div className="flex flex-wrap gap-3">
                    {AMOUNTS.map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setAmount(amt)}
                        className={`flex-1 min-w-[70px] py-2 px-3 rounded-lg border-2 text-sm font-semibold transition-all ${
                          amount === amt
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400'
                            : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-300 dark:hover:border-indigo-700'
                        }`}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Payment Method</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setMethod('upi')}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all ${
                        method === 'upi'
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400'
                          : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-emerald-300'
                      }`}
                    >
                      <QrCode className="w-4 h-4" /> UPI / QR
                    </button>
                    <button
                      onClick={() => setMethod('card')}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all ${
                        method === 'card'
                          ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                          : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-blue-300'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" /> Card (Demo)
                    </button>
                  </div>
                </div>

                {/* Render Payment UI based on method */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  {method === 'upi' ? (
                    <div className="space-y-6">
                      <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-200">
                        <QRCodeCanvas value={upiIntentUrl} size={160} level="H" includeMargin />
                        <p className="mt-3 text-xs text-gray-500 text-center font-medium">Scan with any UPI App</p>
                      </div>
                      
                      <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
                        <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">OR</span>
                        <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
                      </div>

                      <a
                        href={upiIntentUrl}
                        className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors shadow-md shadow-emerald-600/20"
                      >
                        <Smartphone className="w-5 h-5" />
                        Pay ₹{amount} via UPI App
                      </a>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/50">
                        <p className="text-sm text-blue-800 dark:text-blue-300 font-medium text-center">
                          Simulated Card Payment (Demo Mode)
                        </p>
                      </div>
                      <input type="text" placeholder="Cardholder Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white outline-none" />
                      <input type="text" placeholder="Card Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white outline-none" />
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white outline-none" />
                        <input type="text" placeholder="CVV" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white outline-none" />
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleSimulatePayment}
                  className="w-full py-4 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/25 active:scale-[0.98]"
                >
                  I have completed the payment
                </button>
              </div>
            )}

            {step === 'verifying' && (
              <div className="py-12 flex flex-col items-center justify-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 border-4 border-indigo-100 dark:border-indigo-900/30 rounded-full"></div>
                  <Loader2 className="w-20 h-20 text-indigo-600 absolute inset-0 animate-spin" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Verifying Transaction</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Please don't close this window...</p>
                </div>
              </div>
            )}

            {step === 'success' && (
              <div className="py-8 flex flex-col items-center justify-center space-y-6 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  <CheckCircle className="w-24 h-24 text-emerald-500" />
                </motion.div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Payment Successful!</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thank you so much for your support! You just bought me a coffee. ☕
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="mt-4 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
