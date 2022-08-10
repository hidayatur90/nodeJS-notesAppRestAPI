const { handler } = require("@hapi/hapi/lib/cors");
const { 
    addNoteHandler, 
    getAllNotesHandler, 
    getNoteByIdHandler, 
    editNoteByIdHandler, 
    deleteNotesByIdHandler
} = require("./handler");

const routes = [
    {
        method  : "POST",
        path    : "/notes",
        handler : addNoteHandler,
    },
    {
        method  : "GET",
        path    : "/notes",
        handler : getAllNotesHandler,
    },
    {
        method  : "GET",
        path    : "/notes/{id}",
        handler : getNoteByIdHandler,
    },
    {
        method  : "PUT",
        path    : "/notes/{id}",
        handler : editNoteByIdHandler,
    },
    {
        method  : "DELETE",
        path    : "/notes/{id}",
        handler : deleteNotesByIdHandler,
    }
]

module.exports = routes;