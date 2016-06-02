﻿using mobSocial.Data.Enum;

namespace mobSocial.Services.Security
{
    public interface ICryptographyService
    {
        /// <summary>
        /// Creates a salt of specified length
        /// </summary>
        /// <param name="size"></param>
        /// <returns></returns>
        string CreateSalt(int size);

        /// <summary>
        /// Gets the hashed password with required salt and algorithm
        /// </summary>
        /// <param name="plainText"></param>
        /// <param name="salt"></param>
        /// <param name="passwordFormat"></param>
        /// <returns></returns>
        string GetHashedPassword(string plainText, string salt, PasswordFormat passwordFormat);

        /// <summary>
        /// Gets the name of password format
        /// </summary>
        /// <param name="format"></param>
        /// <returns></returns>
        string GetPasswordFormatName(PasswordFormat format);

        /// <summary>
        /// Gets a random alphanumeric password
        /// </summary>
        /// <returns></returns>
        string GetRandomPassword();

        /// <summary>
        /// Encrypts the plain text using specified key and salt
        /// </summary>
        /// <param name="plainText"></param>
        /// <param name="key"></param>
        /// <param name="salt"></param>
        /// <returns></returns>
        string Encrypt(string plainText, string key, string salt);

        /// <summary>
        /// Decrypts the plain text using specified key and salt
        /// </summary>
        /// <param name="cipherText"></param>
        /// <param name="key"></param>
        /// <param name="salt"></param>
        /// <returns></returns>
        string Decrypt(string cipherText, string key, string salt);
    }
}