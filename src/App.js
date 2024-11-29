import './App.css';
import { livenessDetection } from 'santoid-sdk/liveness'

livenessDetection({
  token: 'eyJ0eXAiOiAiSldUIiwgImFsZyI6ICJSUzI1NiJ9.eyJhdWQiOiAiaHR0cHM6Ly9hcGktZ2F0ZXdheS5lbmRwb2ludHMuc2FudG9pZC1wcm9kLmNsb3VkLmdvb2ciLCAiYXpwIjogImZ3Z3RsZnV0cW1yejNyZHk4dGs0Y2Nrcmp0dG94OUBzYW50b2lkLXByb2QuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCAiZW1haWwiOiAiZndndGxmdXRxbXJ6M3JkeTh0azRjY2tyanR0b3g5QHNhbnRvaWQtcHJvZC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsICJlbWFpbF92ZXJpZmllZCI6IHRydWUsICJleHAiOiAxNzMxMDE1NDU1LCAiaWF0IjogMTczMTAxMTg1NSwgImlzcyI6ICJhY2NvdW50LW1hbmFnZXItc2FAc2FudG9pZC1wcm9kLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwgInN1YiI6ICIxMDQ1MjQ5ODY0ODgyMDMxNjM1MjAiLCAiY2xhaW1zIjogeyJtYXJrZXRwbGFjZSI6IGZhbHNlLCAiX2lkIjogImZ3Z3RsZnV0cW1yejNyZHk4dGs0Y2Nrcmp0dG94OUBzYW50b2lkLXByb2QuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCAiZW1haWwiOiAiZndndGxmdXRxbXJ6M3JkeTh0azRjY2tyanR0b3g5QHNhbnRvaWQtcHJvZC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsICJkaXNwbGF5TmFtZSI6ICJTb3RyYW4iLCAiYWN0aXZlIjogdHJ1ZSwgInJvbGUiOiAiRWRpdG9yIiwgImRvbWFpbiI6ICJzb3RyYW4uY29tLmJyIiwgImRvbWFpbkFjdGl2ZSI6IHRydWUsICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCJ9fQ.BPA8thqVuoWNaLdYXjwDTa5PVKW0UtrqC9alIa3dXH-akVnKKcxs06XXUrEWxh1jtpCCzFd4E6NKJ3Qjb5cpeEJbJciSdjr6TumahpC0lb_yLjE8RfWYBg-8lfAZMvvwt5sV2m3N701MZcmByp-TFwCNNAvUaDt2zgbcN7Dcb8qp1rDzuNxmhlPpbGiiTH8DWXD_qoCMHvpqFb8ejofab4i5w4tJ9cdFvxug3VXiWTbEvJe3bjdZisUPoSCIQ8AZSMkrC31Fc8dL6EBxrX3y2ZT3RouBJvbu3GDJS3enLJuphuVgu9t_7hJICsgcsolXkOdFv1_sQ-gADHaQwWGRMQ',
  track: 'teste',
  customId: 'string',
  onNextStep(step){
    console.log(step); 
  },
  onStart ({ videoStream }) {
    const video = document.querySelector('video')
    video.srcObject = videoStream    
  },
  onError (error){
    console.log(error);
  },
});


function App() {
  return (
    <div className="App"> </div>
  );
}

export default App;
