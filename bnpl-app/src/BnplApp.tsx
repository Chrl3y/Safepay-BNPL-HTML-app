import React, { useState } from 'react';
import { 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Users, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle,
  Upload,
  Download,
  Search,
  Filter,
  Eye,
  Lock,
  Unlock,
  Phone,
  Building,
  CreditCard,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Calendar,
  User,
  ShoppingCart,
  RefreshCw
} from 'lucide-react';

// Authentication & Role Selection
const LoginScreen = ({ onLogin }) => {
  const [role, setRole] = useState('');
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    if (role) {
      onLogin(role, credentials.username || 'Demo User');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">SafePay BNPL</h1>
          <p className="text-gray-600 mt-2">Salary-Backed Financial Solutions</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Your Role
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole('merchant')}
                className={`p-4 border-2 rounded-lg transition-all ${
                  role === 'merchant'
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                <ShoppingCart className="w-6 h-6 mx-auto mb-2 text-indigo-600" />
                <div className="text-sm font-medium">Merchant</div>
              </button>
              <button
                type="button"
                onClick={() => setRole('employer')}
                className={`p-4 border-2 rounded-lg transition-all ${
                  role === 'employer'
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                <Building className="w-6 h-6 mx-auto mb-2 text-indigo-600" />
                <div className="text-sm font-medium">Employer</div>
              </button>
              <button
                type="button"
                onClick={() => setRole('admin')}
                className={`p-4 border-2 rounded-lg transition-all ${
                  role === 'admin'
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                <Settings className="w-6 h-6 mx-auto mb-2 text-indigo-600" />
                <div className="text-sm font-medium">Admin</div>
              </button>
              <button
                type="button"
                onClick={() => setRole('customer')}
                className={`p-4 border-2 rounded-lg transition-all ${
                  role === 'customer'
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                <User className="w-6 h-6 mx-auto mb-2 text-indigo-600" />
                <div className="text-sm font-medium">Customer</div>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            disabled={!role}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Demo Credentials: Any username with selected role</p>
        </div>
      </div>
    </div>
  );
};

// Merchant Portal
const MerchantDashboard = ({ username, onLogout }) => {
  const [currentView, setCurrentView] = useState('initiate');
  const [transaction, setTransaction] = useState({
    policyNumber: '',
    amount: '',
    description: ''
  });
  const [transactionStatus, setTransactionStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const transactions = [
    { id: 'SP-2026012012345', date: '20 Jan 2026', customer: 'John Kamau', policy: '202600123456', amount: 123600, status: 'delivered' },
    { id: 'SP-2026011998765', date: '19 Jan 2026', customer: 'Sarah Okello', policy: '202600234567', amount: 85000, status: 'pending' },
    { id: 'SP-2026011887654', date: '18 Jan 2026', customer: 'Peter Musoke', policy: '202600345678', amount: 200000, status: 'declined' },
  ];

  const handleSubmitTransaction = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTransactionStatus('approved');
    }, 3000);
  };

  const StatCard = ({ icon: Icon, label, value, trend }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {trend && <p className="text-sm text-green-600 mt-1">↑ {trend}</p>}
        </div>
        <Icon className="w-10 h-10 text-indigo-600 opacity-80" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <ShoppingCart className="w-8 h-8 text-indigo-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Merchant Portal</h1>
                <p className="text-sm text-gray-600">{username}</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setCurrentView('initiate')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                currentView === 'initiate'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              New Transaction
            </button>
            <button
              onClick={() => setCurrentView('history')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                currentView === 'history'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Transaction History
            </button>
          </nav>
        </div>

        {currentView === 'initiate' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Transaction Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">SafePay BNPL Checkout</h2>
                
                {!loading && !transactionStatus && (
                  <form onSubmit={handleSubmitTransaction} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Customer Policy Number *
                      </label>
                      <input
                        type="text"
                        value={transaction.policyNumber}
                        onChange={(e) => setTransaction({ ...transaction, policyNumber: e.target.value })}
                        placeholder="202600123456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        pattern="[0-9]{12}"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">12-digit policy number</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Purchase Amount (UGX) *
                      </label>
                      <input
                        type="number"
                        value={transaction.amount}
                        onChange={(e) => setTransaction({ ...transaction, amount: e.target.value })}
                        placeholder="120000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        min="1000"
                        max="1000000"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">Maximum: UGX 1,000,000</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Item Description
                      </label>
                      <input
                        type="text"
                        value={transaction.description}
                        onChange={(e) => setTransaction({ ...transaction, description: e.target.value })}
                        placeholder="e.g., Samsung Galaxy A54 Smartphone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        maxLength="100"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                    >
                      Send Approval Request
                    </button>
                  </form>
                )}

                {loading && (
                  <div className="text-center py-12">
                    <RefreshCw className="w-12 h-12 text-indigo-600 animate-spin mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Verifying Customer</h3>
                    <p className="text-gray-600 mb-1">Sending approval request to</p>
                    <p className="text-gray-900 font-medium">+256-7XX-XXX-123</p>
                    <p className="text-sm text-gray-500 mt-4">Waiting for customer to approve...</p>
                    <p className="text-sm text-gray-500">This may take up to 3 minutes</p>
                    <button
                      onClick={() => setLoading(false)}
                      className="mt-6 text-red-600 hover:text-red-700 text-sm font-medium"
                    >
                      Cancel Request
                    </button>
                  </div>
                )}

                {transactionStatus === 'approved' && (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Transaction Approved</h3>
                    
                    <div className="bg-gray-50 rounded-lg p-6 text-left mb-6">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Customer:</span>
                          <span className="font-medium">John Kamau</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Policy:</span>
                          <span className="font-medium">{transaction.policyNumber}</span>
                        </div>
                        <div className="border-t border-gray-200 pt-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Purchase Amount:</span>
                            <span className="font-medium">UGX {parseInt(transaction.amount).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Platform Fee (3%):</span>
                            <span className="font-medium">UGX {Math.round(parseInt(transaction.amount) * 0.03).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t border-gray-300 font-bold">
                            <span>Total:</span>
                            <span>UGX {Math.round(parseInt(transaction.amount) * 1.03).toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded border border-blue-200">
                          <p className="text-sm text-blue-900">
                            <strong>Reference:</strong> SP-2026012012345
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="flex items-center justify-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                        <span className="text-sm text-gray-700">Mark as delivered</span>
                      </label>
                    </div>

                    <div className="flex space-x-4">
                      <button className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700">
                        Confirm Delivery
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50">
                        Print Receipt
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        setTransactionStatus(null);
                        setTransaction({ policyNumber: '', amount: '', description: '' });
                      }}
                      className="mt-4 text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                    >
                      Start New Transaction
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Stats Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Summary</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Transactions</p>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Value</p>
                    <p className="text-2xl font-bold text-gray-900">UGX 1.2M</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Approval Rate</p>
                    <p className="text-2xl font-bold text-green-600">91.7%</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">Settlement Info</p>
                    <p className="text-xs text-blue-700 mt-1">Funds release after delivery confirmation. T+1 settlement to your account.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === 'history' && (
          <div>
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by reference or customer"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                  <option>Last 30 days</option>
                  <option>Last 7 days</option>
                  <option>Today</option>
                </select>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Transactions List */}
            <div className="space-y-4">
              {transactions.map((tx) => (
                <div key={tx.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{tx.id}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          tx.status === 'delivered' ? 'bg-green-100 text-green-800' :
                          tx.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {tx.status === 'delivered' ? '✓ Delivered' :
                           tx.status === 'pending' ? '⏳ Pending Delivery' :
                           '❌ Declined'}
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Date</p>
                          <p className="font-medium text-gray-900">{tx.date}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Customer</p>
                          <p className="font-medium text-gray-900">{tx.customer}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Policy</p>
                          <p className="font-medium text-gray-900">{tx.policy}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Amount</p>
                          <p className="font-medium text-gray-900">UGX {tx.amount.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {tx.status === 'pending' && (
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                          Confirm Delivery
                        </button>
                      )}
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Employer Portal
const EmployerDashboard = ({ username, onLogout }) => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [showUploadModal, setShowUploadModal] = useState(false);

  const StatCard = ({ icon: Icon, label, value, alert }) => (
    <div className={`rounded-xl shadow-sm p-6 ${alert ? 'bg-red-50 border-2 border-red-200' : 'bg-white border border-gray-200'}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm ${alert ? 'text-red-600' : 'text-gray-600'}`}>{label}</p>
          <p className={`text-3xl font-bold mt-1 ${alert ? 'text-red-700' : 'text-gray-900'}`}>{value}</p>
        </div>
        <Icon className={`w-12 h-12 ${alert ? 'text-red-600' : 'text-indigo-600'} opacity-80`} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Building className="w-8 h-8 text-indigo-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Employer Portal</h1>
                <p className="text-sm text-gray-600">ABC Company Ltd</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setCurrentView('dashboard')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                currentView === 'dashboard'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setCurrentView('employees')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                currentView === 'employees'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Manage Employees
            </button>
            <button
              onClick={() => setCurrentView('deductions')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                currentView === 'deductions'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Pending Deductions
            </button>
            <button
              onClick={() => setCurrentView('history')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                currentView === 'history'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              History
            </button>
          </nav>
        </div>

        {currentView === 'dashboard' && (
          <div>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard icon={Users} label="Active Employees" value="1,247" />
              <StatCard icon={AlertTriangle} label="Pending Deductions" value="89" alert />
              <StatCard icon={DollarSign} label="This Month" value="UGX 18.4M" />
            </div>

            {/* Alerts */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-red-900 mb-2">Action Required</h3>
                  <ul className="space-y-2 text-red-800">
                    <li>• 89 deductions pending approval (due 25 Jan)</li>
                    <li>• December remittance upload overdue</li>
                  </ul>
                  <div className="flex space-x-4 mt-4">
                    <button
                      onClick={() => setCurrentView('deductions')}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium"
                    >
                      Approve Deductions
                    </button>
                    <button
                      onClick={() => setShowUploadModal(true)}
                      className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 text-sm font-medium"
                    >
                      Upload Remittance
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">19 Jan | 45 employees added (bulk upload)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">18 Jan | Deduction batch approved (UGX 8M)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Upload className="w-5 h-5 text-blue-600" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">15 Jan | Remittance confirmed (Dec 2025)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === 'deductions' && (
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Pending Deductions – January 2026</h2>
                  <p className="text-red-600 font-medium mt-1">Due Date: 25 January 2026 (5 days remaining)</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-blue-700">Total Employees</p>
                    <p className="text-2xl font-bold text-blue-900">89</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-700">Total Amount</p>
                    <p className="text-2xl font-bold text-blue-900">UGX 18,420,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-700">Selected</p>
                    <p className="text-2xl font-bold text-blue-900">89</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { id: 'EMP-001', name: 'John Kamau', dept: 'Sales Dept', policy: '202600123456', amount: 61800 },
                  { id: 'EMP-045', name: 'Sarah Okello', dept: 'Marketing', policy: '202600234567', amount: 125000 },
                  { id: 'EMP-078', name: 'Peter Musoke', dept: 'Operations', policy: '202600345678', amount: 88500 },
                ].map((emp) => (
                  <div key={emp.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600 rounded mr-4" />
                      <div className="flex-1 grid grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Employee</p>
                          <p className="font-medium text-gray-900">{emp.id} | {emp.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Department</p>
                          <p className="font-medium text-gray-900">{emp.dept}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Policy</p>
                          <p className="font-medium text-gray-900">{emp.policy}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Amount</p>
                          <p className="font-medium text-gray-900">UGX {emp.amount.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <div>
                  <p className="text-sm text-gray-600">Selected: 89 employees</p>
                  <p className="text-xl font-bold text-gray-900">Total: UGX 18,420,000</p>
                </div>
                <div className="flex space-x-4">
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Export List</span>
                  </button>
                  <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
                    Approve Selected Batch
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === 'employees' && (
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Add Employees to BNPL Program</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Step 1: Download Template</h3>
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Excel Template</span>
                </button>
                <div className="mt-4 bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Required fields:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Employee ID (your internal ID)</li>
                    <li>• Full Name</li>
                    <li>• Phone Number (+256 format)</li>
                    <li>• Monthly Salary (UGX)</li>
                    <li>• BNPL Limit (max 30% of salary)</li>
                    <li>• Employment Status (Permanent/Contract)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Step 2: Upload Completed File</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-indigo-400 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium mb-2">Drag & drop Excel file here</p>
                  <p className="text-sm text-gray-500 mb-4">or</p>
                  <button className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    Browse Files
                  </button>
                  <p className="text-xs text-gray-500 mt-4">Max 1,000 employees per upload</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === 'history' && (
          <div className="space-y-4">
            {[
              { month: 'January 2026', employees: 89, amount: 18420000, status: 'pending' },
              { month: 'December 2025', employees: 85, amount: 16250000, status: 'completed' },
              { month: 'November 2025', employees: 82, amount: 15890000, status: 'completed' },
            ].map((period) => (
              <div key={period.month} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{period.month}</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Employees</p>
                        <p className="font-medium text-gray-900">{period.employees}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Amount</p>
                        <p className="font-medium text-gray-900">UGX {period.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Status</p>
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          period.status === 'completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {period.status === 'completed' ? '✓ Completed' : '⏳ Remittance Pending'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {period.status === 'pending' && (
                      <button 
                        onClick={() => setShowUploadModal(true)}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm"
                      >
                        Upload Remittance
                      </button>
                    )}
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                      View Details
                    </button>
                    {period.status === 'completed' && (
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Receipt</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Upload Remittance Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Upload Remittance Proof</h2>
              <button onClick={() => setShowUploadModal(false)}>
                <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Deduction Period *
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                  <option>January 2026</option>
                  <option>December 2025</option>
                </select>
                <p className="text-sm text-gray-600 mt-2">Expected Amount: UGX 18,420,000</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Bank Transfer Proof *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium mb-1">Drag & drop PDF/image here</p>
                  <p className="text-sm text-gray-500 mb-3">or browse files</p>
                  <p className="text-xs text-gray-400">Accepted: PDF, JPG, PNG (max 5MB)</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount Remitted (UGX)
                  </label>
                  <input
                    type="number"
                    placeholder="18420000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Transfer Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bank Reference
                </label>
                <input
                  type="text"
                  placeholder="BNK-REF-123456"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <p className="text-sm text-yellow-800">Funds must match approved batch amount</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Submit Remittance
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Admin Dashboard
const AdminDashboard = ({ username, onLogout }) => {
  const [currentView, setCurrentView] = useState('dashboard');

  const StatCard = ({ icon: Icon, label, value, trend, color = 'indigo' }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
          {trend && (
            <p className={`text-sm mt-1 ${trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {trend}
            </p>
          )}
        </div>
        <Icon className={`w-12 h-12 text-${color}-600 opacity-80`} />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Settings className="w-8 h-8 text-indigo-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">SafePay Operations</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Last updated</p>
                <p className="text-sm font-medium text-gray-900">20 Jan 2026, 14:30 EAT</p>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="flex space-x-8">
            {['dashboard', 'contracts', 'escrow', 'reconciliation', 'alerts'].map((view) => (
              <button
                key={view}
                onClick={() => setCurrentView(view)}
                className={`pb-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  currentView === view
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {view}
              </button>
            ))}
          </nav>
        </div>

        {currentView === 'dashboard' && (
          <div>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <StatCard icon={FileText} label="Active Contracts" value="12,458" trend="+8%" />
              <StatCard icon={DollarSign} label="Total Portfolio" value="UGX 2.4B" trend="+12%" />
              <StatCard icon={TrendingUp} label="This Month" value="UGX 145M" trend="+5%" />
              <StatCard icon={AlertCircle} label="Default Rate" value="1.2%" trend="-0.3%" color="green" />
            </div>

            {/* Critical Alerts */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-red-900 mb-3">Critical Alerts (3)</h3>
                  <ul className="space-y-2 text-red-800">
                    <li>• 12 employer remittances overdue</li>
                    <li>• UGX 2.4M reconciliation mismatch (Pesapal)</li>
                    <li>• 89 contracts pending delivery confirmation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Portfolio Health */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Portfolio Health</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Performing</span>
                    <span className="font-medium text-green-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">PAR 1-30</span>
                    <span className="font-medium text-yellow-600">12%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">PAR 30+</span>
                    <span className="font-medium text-red-600">3%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full" style={{ width: '3%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Liquidity Recycling</span>
                  <span className="text-xl font-bold text-gray-900">18 days</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Target: 15 days</p>
              </div>
            </div>
          </div>
        )}

        {currentView === 'contracts' && (
          <div>
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by policy, reference, or customer"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg">
                  <option>All Status</option>
                  <option>In Repayment</option>
                  <option>Escrow Held</option>
                  <option>Overdue</option>
                </select>
                <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                  <Filter className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Contracts List */}
            <div className="space-y-4">
              {[
                { ref: 'SP-2026012012345', date: '20 Jan 2026', customer: 'John Kamau', policy: '202600123456', merchant: 'Jumia Uganda', amount: 123600, tenor: 2, status: 'repayment', progress: '1/2 paid' },
                { ref: 'SP-2026011998765', date: '19 Jan 2026', customer: 'Sarah Okello', policy: '202600234567', merchant: 'Glovo Kenya', amount: 85000, tenor: 1, status: 'escrow', progress: 'delivery pending' },
                { ref: 'SP-2026011887654', date: '18 Jan 2026', customer: 'Peter Musoke', policy: '202600345678', merchant: 'Jumia Uganda', amount: 200000, tenor: 3, status: 'overdue', progress: '15 days' },
              ].map((contract) => (
                <div key={contract.ref} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{contract.ref}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          contract.status === 'repayment' ? 'bg-green-100 text-green-800' :
                          contract.status === 'escrow' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {contract.status === 'repayment' ? '🟢 IN_REPAYMENT' :
                           contract.status === 'escrow' ? '🟡 ESCROW_HELD' :
                           '🔴 OVERDUE'} ({contract.progress})
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{contract.date}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                        View Details
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                        Transaction Log
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Customer</p>
                      <p className="font-medium text-gray-900">{contract.customer}</p>
                      <p className="text-xs text-gray-500">{contract.policy}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Merchant</p>
                      <p className="font-medium text-gray-900">{contract.merchant}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Amount</p>
                      <p className="font-medium text-gray-900">UGX {contract.amount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Tenor</p>
                      <p className="font-medium text-gray-900">{contract.tenor} months</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Status</p>
                      <p className="font-medium text-gray-900">{contract.progress}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === 'escrow' && (
          <div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-blue-700">Total in Escrow</p>
                  <p className="text-3xl font-bold text-blue-900">UGX 145.6M</p>
                </div>
                <div>
                  <p className="text-sm text-blue-700">Contracts Held</p>
                  <p className="text-3xl font-bold text-blue-900">89</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-2">Aging Alerts</h3>
                  <ul className="space-y-1 text-red-800 text-sm">
                    <li>• 12 contracts held &gt;72 hours (delivery overdue)</li>
                    <li>• 3 merchants with &gt;5 delayed confirmations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { ref: 'SP-2026011998765', merchant: 'Glovo Kenya', amount: 85000, held: '25 hrs', status: 'awaiting' },
                { ref: 'SP-2026011756432', merchant: 'Jumia Uganda', amount: 156000, held: '78 hrs', status: 'dispute', alert: true },
              ].map((escrow) => (
                <div key={escrow.ref} className={`bg-white rounded-xl shadow-sm p-6 ${escrow.alert ? 'border-2 border-red-300' : 'border border-gray-200'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{escrow.ref}</h3>
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Merchant</p>
                          <p className="font-medium text-gray-900">{escrow.merchant}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Amount</p>
                          <p className="font-medium text-gray-900">UGX {escrow.amount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Held Since</p>
                          <p className={`font-medium ${escrow.alert ? 'text-red-600' : 'text-gray-900'}`}>
                            {escrow.held} {escrow.alert && '⚠'}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Status</p>
                          <p className="font-medium text-gray-900">
                            {escrow.status === 'dispute' ? 'Delivery dispute opened' : 'Awaiting delivery confirmation'}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      {escrow.status === 'dispute' ? (
                        <>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                            View Dispute
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                            Initiate Refund
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                            Contact Merchant
                          </button>
                          <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 text-sm">
                            Force Release
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === 'reconciliation' && (
          <div>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Pesapal</p>
                <p className="text-3xl font-bold text-gray-900">UGX 145.6M</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Mifos X</p>
                <p className="text-3xl font-bold text-red-600">UGX 145.8M</p>
                <p className="text-sm text-red-600 mt-1">+UGX 200K variance</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
                <p className="text-sm text-gray-600 mb-2">BNPL Ledger</p>
                <p className="text-3xl font-bold text-gray-900">UGX 145.6M</p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6">
              <p className="text-red-900 font-semibold">⚠ Discrepancies Found (3)</p>
            </div>

            <div className="space-y-4">
              {[
                { type: 'Mifos X Mismatch', contract: 'SP-2026011534567', bnpl: 123600, mifos: 123800, diff: 200, cause: 'Manual adjustment' },
                { type: 'Pesapal Settlement Delay', contract: 'SP-2026011423456', expected: '19 Jan 2026', settled: '20 Jan 2026', delay: 'T+1 delay', amount: 85000 },
              ].map((issue, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{issue.type}</h3>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Contract</p>
                        <p className="font-medium text-gray-900">{issue.contract}</p>
                      </div>
                      {issue.bnpl && (
                        <>
                          <div>
                            <p className="text-gray-600">BNPL Ledger</p>
                            <p className="font-medium text-gray-900">UGX {issue.bnpl.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Mifos X</p>
                            <p className="font-medium text-red-600">UGX {issue.mifos.toLocaleString()} (+UGX {issue.diff})</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Likely Cause</p>
                            <p className="font-medium text-gray-900">{issue.cause}</p>
                          </div>
                        </>
                      )}
                      {issue.expected && (
                        <>
                          <div>
                            <p className="text-gray-600">Expected</p>
                            <p className="font-medium text-gray-900">{issue.expected}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Settled</p>
                            <p className="font-medium text-red-600">{issue.settled} ({issue.delay})</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Impact</p>
                            <p className="font-medium text-gray-900">UGX {issue.amount.toLocaleString()} delayed</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                      Investigate
                    </button>
                    {issue.bnpl && (
                      <>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                          Adjust BNPL
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                          Adjust Mifos
                        </button>
                      </>
                    )}
                    {issue.expected && (
                      <>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                          Contact Pesapal
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                          Mark Resolved
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center space-x-2">
                <RefreshCw className="w-5 h-5" />
                <span>Run Full Reconciliation</span>
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Export Variances</span>
              </button>
            </div>
          </div>
        )}

        {currentView === 'alerts' && (
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium">
                Critical (2)
              </button>
              <button className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg text-sm font-medium">
                Warning (5)
              </button>
              <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium">
                Info (12)
              </button>
            </div>

            <div className="space-y-4">
              {/* Critical Alert */}
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-red-900 mb-2">Employer Remittance Overdue</h3>
                    <div className="text-sm text-red-800 space-y-1 mb-4">
                      <p><strong>Employer:</strong> XYZ Industries</p>
                      <p><strong>Amount:</strong> UGX 890,000</p>
                      <p><strong>Due:</strong> 31 Dec 2025 (21 days overdue)</p>
                      <p><strong>Action:</strong> Freeze new BNPL approvals</p>
                    </div>
                    <div className="flex space-x-3">
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
                        Contact Employer
                      </button>
                      <button className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 text-sm">
                        Suspend Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warning Alert */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-2">Customer Auth Failure Spike</h3>
                    <div className="text-sm text-yellow-800 space-y-1 mb-4">
                      <p>12 failed PIN attempts in last hour</p>
                      <p><strong>Policy:</strong> 202600456789 (Sarah Okello)</p>
                      <p><strong>Possible:</strong> Fraud attempt or lost phone</p>
                    </div>
                    <div className="flex space-x-3">
                      <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 text-sm">
                        Lock Policy
                      </button>
                      <button className="px-4 py-2 border border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-50 text-sm">
                        Contact Customer
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Alert */}
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">New Employer Onboarded</h3>
                    <div className="text-sm text-blue-800 space-y-1 mb-4">
                      <p><strong>Employer:</strong> DEF Corporation</p>
                      <p><strong>Employees:</strong> 67</p>
                      <p><strong>BNPL limit pool:</strong> UGX 15M</p>
                    </div>
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                <Settings className="w-5 h-5" />
                <span>Configure Alert Rules</span>
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Export Alert Log</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Customer Web View (simplified)
const CustomerDashboard = ({ username, onLogout }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <User className="w-8 h-8 text-indigo-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">My BNPL Account</h1>
                <p className="text-sm text-gray-600">{username}</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>

          {/* Limit Card */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-6 text-white mb-6">
            <p className="text-sm opacity-90 mb-2">Available BNPL Limit</p>
            <p className="text-4xl font-bold mb-4">UGX 450,000</p>
            <div className="flex justify-between text-sm">
              <div>
                <p className="opacity-75">Used</p>
                <p className="font-semibold">UGX 50,000</p>
              </div>
              <div>
                <p className="opacity-75">Total Limit</p>
                <p className="font-semibold">UGX 500,000</p>
              </div>
            </div>
          </div>

          {/* Next Payment */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
            <div className="flex items-center space-x-3 mb-3">
              <Clock className="w-5 h-5 text-yellow-600" />
              <h3 className="font-semibold text-yellow-900">Next Repayment</h3>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-bold text-yellow-900">UGX 25,000</p>
                <p className="text-sm text-yellow-700">Due on 28-Feb-2026</p>
              </div>
              <p className="text-sm text-yellow-700">8 days remaining</p>
            </div>
          </div>

          {/* Repayment Schedule */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Repayment Schedule</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">January 2026</p>
                  <p className="text-sm text-gray-600">UGX 25,000</p>
                </div>
                <span className="text-green-600 font-semibold">✓ PAID</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">February 2026</p>
                  <p className="text-sm text-gray-600">UGX 25,000</p>
                </div>
                <span className="text-yellow-600 font-semibold">PENDING (in 8 days)</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">March 2026</p>
                  <p className="text-sm text-gray-600">UGX 25,000</p>
                </div>
                <span className="text-gray-600 font-semibold">SCHEDULED</span>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total Outstanding</span>
                <span className="font-bold text-gray-900">UGX 50,000</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="text-sm text-blue-900">
                <p className="font-medium mb-1">USSD Access</p>
                <p>Dial <strong>*XXX#</strong> from your registered phone to check limits and approve transactions on the go.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (role, username) => {
    setUser({ role, username });
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (user.role === 'merchant') {
    return <MerchantDashboard username={user.username} onLogout={handleLogout} />;
  }

  if (user.role === 'employer') {
    return <EmployerDashboard username={user.username} onLogout={handleLogout} />;
  }

  if (user.role === 'admin') {
    return <AdminDashboard username={user.username} onLogout={handleLogout} />;
  }

  if (user.role === 'customer') {
    return <CustomerDashboard username={user.username} onLogout={handleLogout} />;
  }

  return null;
}