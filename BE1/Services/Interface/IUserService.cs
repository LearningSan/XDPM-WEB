using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE1.DTOs;
using BE1.Models;

namespace BE1.Services.Interface
{
    public interface IUserService
    {
        Task<List<User>> GetAllUsers();
        Task<User> GetUserById(string id);
        Task<User> CreateUser(UserDto userDto);
        Task<bool> UpdateUser(string id, UserDto userDto);
        Task<bool> DeleteUser(string id);
    }
}