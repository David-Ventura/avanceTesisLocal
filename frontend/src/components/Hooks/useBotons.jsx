import { useState } from 'react';
const InlineForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: ''
    });
    return [showForm, setShowForm]
}
export default InlineForm