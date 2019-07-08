/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

/**
 *
 * @author Eddie
 */
@WebServlet(name = "ServiceInsertRoute", urlPatterns = {"/ServiceInsertRoute"})
@MultipartConfig()
public class ServiceInsertRoute extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        Part filePart = request.getPart("inputRoute");
        InputStream fileContent = filePart.getInputStream();
        InputStreamReader isr = new InputStreamReader(fileContent);
        BufferedReader fichero;
        try{
            fichero = new BufferedReader(isr);
            String line;
            while((line = fichero.readLine()) != null){
                String sFichero = new String(line.getBytes("ISO-8859-1"), "UTF-8");
                String[] parts = sFichero.split(",");
                parts[1] = parts[1].trim();
                parts[2] = parts[2].trim();
                parts[3] = parts[3].trim();
                parts[4] = parts[4].trim();
                int code1 = Integer.parseInt(parts[0]);
                int code2 = Integer.parseInt(parts[1]);
                double cost = Double.parseDouble(parts[2]);
                int time = Integer.parseInt(parts[3]);
                insertRoute(code1, code2, cost, time, parts[4]);
            }
            fichero.close();
        }catch(IOException e){
        }
        response.sendRedirect("cargarutas_view.jsp");
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

    private static String insertRoute(int code1, int code2, double cost, int time, java.lang.String pilot) {
        wsservices.WSAirport_Service service = new wsservices.WSAirport_Service();
        wsservices.WSAirport port = service.getWSAirportPort();
        return port.insertRoute(code1, code2, cost, time, pilot);
    }

}
