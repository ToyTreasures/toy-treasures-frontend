const ConfirmationModal = ({
  show,
  message,
  onConfirm,
  onCancel,
  isLoading = false,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-[--secondary-color]">
            Confirm Action
          </h2>
          <p>{message}</p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-800 hover:bg-gray-400 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className="bg-[--primary-color] text-white hover:bg-[--secondary-color] hover:text-[--primary-color] px-4 py-2 rounded"
          >
            {isLoading ? "Processing..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

// For Editing a Listed Item:
// Message: "Do you want to save these changes to your listed item?"

// For Marking an Item as Sold:
// Message: "Are you sure you want to mark this item as sold? It will no longer be visible to other users."

// For Editing User Data:
// Message: "Are you sure you want to update your personal information?"
